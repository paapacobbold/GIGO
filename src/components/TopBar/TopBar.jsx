import React, { useEffect, useState } from 'react';
import './TopBar.css';
import { Bell, Search } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import defaultProfilePic from "../../assets/images/picture.png";

const TopBar = () => {
  const { user } = useAuth(); // Fetching the user from AuthContext
  const [displayName, setDisplayName] = useState("User");

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "User"); // Set display name or default to 'User'
    }
  }, [user]);

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
          <Bell className="bell-icon" size={25}/>
        </div>
        <div className="profile">
          <img 
            src={user?.photoURL || defaultProfilePic} 
            alt="" 
            className="profile-pic" 
          />
          <div className="profile-info">
            <span className="name">{displayName}</span>
            <span className="role">User</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;