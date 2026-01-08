const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.dangky = async (req, res) => {
  const { hoten, ngaysinh, gioitinh, diachi, sdt, email, matkhau } = req.body;

  if (!hoten || !ngaysinh || !gioitinh || !diachi || !sdt || !email || !matkhau) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email format"
    });
  }

  if (!/^\d{9,11}$/.test(sdt)) {
    return res.status(400).json({
      message: "Phone number must contain only digits (9–11 characters)"
    });
  }

  if (matkhau.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters"
    });
  }

  try {
    db.query(
      "SELECT id FROM users WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) {
          return res.status(500).json({
            message: "Server error"
          });
        }

        if (result.length > 0) {
          return res.status(409).json({
            message: "Email already exists"
          });
        }

        const hash = await bcrypt.hash(matkhau, 10);

        const sql = `
          INSERT INTO users
          (hoten, ngaysinh, gioitinh, diachi, sdt, email, matkhau)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        db.query(
          sql,
          [hoten, ngaysinh, gioitinh, diachi, sdt, email, hash],
          (err) => {
            if (err) {
              return res.status(500).json({
                message: "Failed to create account"
              });
            }

            res.status(201).json({
              message: "Account created successfully"
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({
      message: "Unexpected server error"
    });
  }
};

exports.dangnhap = (req, res) => {
  const { email, matkhau } = req.body;

  if (!email || !matkhau) {
    return res.status(400).json({
      message: "Email and password are required"
    });
  }

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Server error"
        });
      }

      if (result.length === 0) {
        return res.status(404).json({
          message: "Email does not exist"
        });
      }

      const user = result[0];
      const isMatch = await bcrypt.compare(matkhau, user.matkhau);

      if (!isMatch) {
        return res.status(401).json({
          message: "Incorrect password"
        });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      res.json({
        message: "Login successful",
        token,
        user: {
          id: user.id,
          hoten: user.hoten,
          email: user.email
        }
      });
    }
  );
};

exports.dangxuat = (req, res) => {
  res.json({
    message: "Logout successful"
  });
};
