import React from 'react';
import '../Styles/Card.css';

export default function Card({ userName, followers, todayFollowers, icon, name }) {
  const cardClass = `card ${name}`;

  return (
    <div>
      <article className={cardClass}>
        <p className="card-title">
          <img src={icon} alt={`Avatar for ${userName}`} />
          {userName}
        </p>
        <p className="card-followers">
          <span className="card-followers-number">{followers}</span>
          <span className="card-followers-title">Followers</span>
        </p>
        <p className="card-today">
          <img src="image/up.png" alt="Up Arrow" />
          {todayFollowers} today
        </p>
      </article>
    </div>
  );
}
