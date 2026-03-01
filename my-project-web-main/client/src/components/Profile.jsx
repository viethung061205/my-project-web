import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  
  const savedUser = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(savedUser);
  const [avatar, setAvatar] = useState(savedUser?.avatar || null);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...userData });

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const updateProfileAPI = async (updatedUser) => {
    try {
      const response = await fetch("http://localhost:3000/api/user/thongtincanhan", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });

      const data = await response.json();
      if (response.ok) {
        setUserData(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("avatar", data.user.avatar || "");
        setIsEditing(false);
        alert("Profile updated successfully!");
      } else {
        alert(data.message || "Profile update failed");
      }
    } catch (error) {
      console.error("Update error:", error);
      alert("An error occurred while updating profile");
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;
      setAvatar(base64Image);
      updateProfileAPI({ ...userData, avatar: base64Image });
    };
    reader.readAsDataURL(file);
  };

  const handleSaveInfo = () => {
    updateProfileAPI({ ...editData, avatar: avatar });
  };

  if (!userData) return <div>Please login to continue</div>;

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h1 className="profile-title">My Account</h1>

        <div className="profile-avatar">
          <img
            src={avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt="Avatar"
          />
          <label className="upload-btn">
            Change Photo
            <input type="file" accept="image/*" onChange={handleAvatarChange} hidden />
          </label>
        </div>

        <div className="profile-info">
          {isEditing ? (
            <>
              <div className="input-group">
                <label>Full Name:</label>
                <input name="hoten" value={editData.hoten} onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Gender:</label>
                <select name="gioitinh" value={editData.gioitinh} onChange={handleChange}>
                  <option value="Nam">Male</option>
                  <option value="Nữ">Female</option>
                  <option value="Khác">Other</option>
                </select>
              </div>

              <div className="input-group">
                <label>Phone:</label>
                <input name="sdt" value={editData.sdt} onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Address:</label>
                <input name="diachi" value={editData.diachi} onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Birthday:</label>
                <input
                  type="date"
                  name="ngaysinh"
                  value={editData.ngaysinh?.split("T")[0]}
                  onChange={handleChange}
                />
              </div>

              <div className="profile-actions">
                <button className="save-btn" onClick={handleSaveInfo}>
                  Save Changes
                </button>
                <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <p><span>Full Name:</span> {userData.hoten}</p>
              <p><span>Email:</span> {userData.email} (Fixed)</p>
              <p><span>Phone:</span> {userData.sdt}</p>
              <p><span>Address:</span> {userData.diachi}</p>
              <p><span>Gender:</span> {userData.gioitinh}</p>
              <p>
                <span>Birthday:</span>{" "}
                {new Date(userData.ngaysinh).toLocaleDateString()}
              </p>

              <div className="profile-actions">
                <button className="edit-btn" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </button>
                <button className="logout-btn-profile" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}