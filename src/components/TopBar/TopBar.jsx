import React from 'react';
import './TopBar.css';
import { Bell, Search } from 'lucide-react';


const TopBar = () => {
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
                src="" 
                alt="" 
                className="profile-pic" 
            />
            <div className="profile-info">
                <span className="name">John Doe</span>
                <span className="role">User</span>
            </div>
            </div>
        </div>
    </div>
  );
};

export default TopBar;
