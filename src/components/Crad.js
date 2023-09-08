// import React from 'react'
// import "../Styles/Card.css"

// export default function Crad({userName,followers,todayFollowers,icon,name}) {
//   const cardClass =`card${name}`
//   return (
//     <div>
//       <article className={cardClass}>
//         <p className="card-title">
//             <img src={icon}/>
//             {userName}
//         </p>
//         <p className="card-followers">
//             <span className="card-follwers-number">
//                 {followers}
//             </span>
//         <span className="card-followers-title">Followers</span>
//         </p>
//         <p className="card-today">
//             <img src="image/up.png"/>
//             {todayFollowers} today
//         </p>
//       </article>
//     </div>
//   )
// }

import React from 'react';
import '../Styles/Card.css';

export default function Card({ userName, followers, todayFollowers, icon, name }) {
  const cardClass = `card ${name}`; // Corrected interpolation

  return (
    <div>
      <article className={cardClass}>
        <p className="card-title">
          <img src={icon} alt={`Avatar for ${userName}`} /> {/* Added alt attribute */}
          {userName}
        </p>
        <p className="card-followers">
          <span className="card-followers-number">{followers}</span>
          <span className="card-followers-title">Followers</span>
        </p>
        <p className="card-today">
          <img src="image/up.png" alt="Up Arrow" /> {/* Added alt attribute */}
          {todayFollowers} today
        </p>
      </article>
    </div>
  );
}
