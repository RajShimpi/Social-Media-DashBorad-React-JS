import React from 'react';
import '../Styles/Card-small.css'

function Cardsmall({growth,pageviews,icon}) {
  return (
    <div>
      <p className="card-small-views">pageviews</p>
      <p className="card-small-icon">
        <img src={icon} alt="Up Arrow Icon"/>
      </p>
      <p className="card-small-number">{pageviews}</p>
      <p className="card-small-percentage">
        <span>
            <img src="image/up.png" alt="Up Arrow Icon"/>
            {growth}%
        </span>
      </p>
    </div>
  )
}
export default Cardsmall;