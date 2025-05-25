import React from 'react';
import './LinksCard.css';

function LinksCard({ image, text, link }) {
  return (
    <a href={link} className="custom-card" target="_blank" rel="noopener noreferrer">
      <div className="card-image-container">
        <img src={image} alt={text} className="card-image" />
      </div>
      <div className="card-bar">
        <span className="card-text">{text}</span>
      </div>
    </a>
  );
}

export default LinksCard;