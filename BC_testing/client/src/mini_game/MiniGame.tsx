import React, { useEffect } from 'react';
import './styles.css';

const SimonGame: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
    script.async = true;
    document.body.appendChild(script);

    const gameScript = document.createElement('script');
    gameScript.src = './game.js';
    gameScript.async = true;
    document.body.appendChild(gameScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(gameScript);
    };
  }, []);

  return (
    <div>
      <h1 id="level-title">Press A Key to Start</h1>
      <div className="container">
        <div className="row">
          <button id="green" className="btn green"></button>
          <button id="red" className="btn red"></button>
        </div>
        <div className="row">
          <button id="yellow" className="btn yellow"></button>
          <button id="blue" className="btn blue"></button>
        </div>
      </div>
    </div>
  );
};

export default SimonGame;
