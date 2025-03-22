"use client";
import { Bell, Search } from "lucide-react";
import { useUser } from "../../context/UserContext";
import "./TopBar.css";

const TopBar = () => {
  const { userData } = useUser();

  return (
    <div className="top-bar">
      <div className="search-container">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Mother Earth Day is coming..."
          className="search-input"
        />
      </div>

      <div className="actions">
        <div className="icon notification">
          <Bell size={20} color="#16a34a" />
        </div>

        <div className="profile">
          <img
            src={
              userData?.profileImage || "/placeholder.svg?height=40&width=40"
            }
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-info">
            <span className="name">
              {userData?.firstName && userData?.lastName
                ? `${userData.firstName} ${userData.lastName}`
                : "John Doe"}
            </span>
            <span className="role">User</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
