const express = require("express");
const router = express.Router();
const user = require("../api/user");

router.post("/dangky", user.dangky);
router.post("/dangnhap", user.dangnhap);
router.post("/dangxuat", user.dangxuat);

router.post("/guiOTP", user.guiOTP);
router.post("/xacnhanOTP", user.xacnhanOTP);

module.exports = router;
