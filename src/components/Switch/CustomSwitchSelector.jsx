import React from 'react';
import { Sun, Moon } from 'lucide-react';
import './CustomSwitchSelector.css';

const CustomSwitchSelector = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="custom-switch-container">
      <div 
        className={`custom-switch ${!isDarkMode ? 'selected' : ''}`} 
        onClick={() => setIsDarkMode(false)}
      >
        <Sun size={16} />
        <span>Light</span>
      </div>
      <div 
        className={`custom-switch ${isDarkMode ? 'selected' : ''}`}
        onClick={() => setIsDarkMode(true)}
      >
        <Moon size={16} />
        <span>Dark</span>
      </div>
    </div>
  );
};

export default CustomSwitchSelector;