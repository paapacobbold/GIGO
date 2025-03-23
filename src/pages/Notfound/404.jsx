import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './404.css';

const NotFoundPage = () => {
  const [trashItems, setTrashItems] = useState([]);
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [lastScore, setLastScore] = useState(0);
  
  const generateRandomTrash = () => {
    const trashTypes = [
      { type: 'bottle', icon: '🍾', points: 5, recyclable: true },
      { type: 'paper', icon: '📄', points: 3, recyclable: true },
      { type: 'banana', icon: '🍌', points: 2, recyclable: true },
      { type: 'can', icon: '🥫', points: 4, recyclable: true },
      { type: 'battery', icon: '🔋', points: 8, recyclable: false },
      { type: 'plastic', icon: '🥤', points: 3, recyclable: true },
      { type: 'lightbulb', icon: '💡', points: 6, recyclable: false },
      { type: 'apple', icon: '🍎', points: 2, recyclable: true }
    ];
    
    const newTrash = [];
    for (let i = 0; i < 5; i++) {
      const randomTrash = trashTypes[Math.floor(Math.random() * trashTypes.length)];
      const id = Math.random().toString(36).substring(7);
      const left = Math.floor(Math.random() * 80) + 10;
      const top = Math.floor(Math.random() * 60) + 20;
      
      newTrash.push({
        ...randomTrash,
        id,
        position: { left, top },
        collected: false
      });
    }
    
    return newTrash;
  };
  
  const startGame = () => {
    setTrashItems(generateRandomTrash());
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
  };
  
  const collectTrash = (id, points, recyclable) => {
    // Update the collected status of the item
    setTrashItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, collected: true } : item
      )
    );
    
    // Points are awarded for recyclable items, deducted for non-recyclable
    setScore(prevScore => recyclable ? prevScore + points : prevScore - points);
  };
  
  // Check if we need to generate new trash
  useEffect(() => {
    if (gameActive) {
      const remainingItems = trashItems.filter(item => !item.collected).length;
      if (remainingItems === 0) {
        // Generate new trash when all items are collected
        setTimeout(() => {
          setTrashItems(generateRandomTrash());
        }, 500);
      }
    }
  }, [trashItems, gameActive]);
  
  // Game timer logic
  useEffect(() => {
    let timer;
    if (gameActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
      setLastScore(score); // Save the score when game ends
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [gameActive, timeLeft, score]);
  
  return (
    <div className="not-found-container">
      {/* Background trash pattern */}
      <div className="trash-background">
        {[...Array(20)].map((_, i) => (
          <div 
            key={`bg-icon-${i}`}
            className="background-icon"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            {['🗑️', '♻️', '📦', '🍾', '📄', '🥫'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>
      
      <div className="not-found-card">
        <div className="icon-circle">
          <div className="icon-container">
            <FontAwesomeIcon icon={faRecycle} className="icon-white" />
          </div>
        </div>
        
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Waste Not Found!</h2>
        <p className="not-found-desc">
          Oops! Looks like this page has been properly disposed of or recycled.
        </p>
        
        {!gameActive ? (
          <div className="game-container">
            <div className="game-prompt">
              <p className="game-prompt-title">While you're here...</p>
              <p className="game-prompt-desc">Want to practice your recycling skills?</p>
              <button
                onClick={startGame}
                className="start-game-btn"
                type="button"
              >
                Sort The Trash Game
              </button>
              
              {lastScore > 0 && (
                <p className="last-score">
                  Your last score: {lastScore} points!
                </p>
              )}
            </div>
            
            <div className="nav-buttons">
              <Link 
                to="/"
                className="nav-btn home-btn"
              >
                <FontAwesomeIcon icon={faHome} />
                <span>Go Home</span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className="nav-btn back-btn"
                type="button"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="game-arena">
            <div className="score-display">
              <FontAwesomeIcon icon={faRecycle} className="score-icon" />
              <span className="score-text">{score} pts</span>
            </div>
            
            <div className="timer-display">
              <span className="timer-text">{timeLeft}s</span>
            </div>
            
            <div className="game-instructions">
              <p>Click recyclable items ♻️, avoid non-recyclables ❌</p>
            </div>
            
            {trashItems.map(item => !item.collected && (
              <button
                key={item.id}
                className="trash-item"
                style={{
                  left: `${item.position.left}%`,
                  top: `${item.position.top}%`
                }}
                onClick={() => collectTrash(item.id, item.points, item.recyclable)}
                title={`${item.type} (${item.recyclable ? 'Recyclable' : 'Non-recyclable'})`}
                type="button"
                aria-label={`${item.type} ${item.recyclable ? 'recyclable' : 'non-recyclable'} item`}
              >
                {item.icon}
              </button>
            ))}
          </div>
        )}
        
        {gameActive && (
          <div className="game-tip">
            <p>Tip: Collect recyclable items for points. Non-recyclable items reduce points!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFoundPage;