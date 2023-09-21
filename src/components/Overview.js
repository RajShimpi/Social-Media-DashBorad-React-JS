import React from 'react';
import Cardsmall from './Card-small';
import '../Styles/Overview.css';

export default function Overview() {
  const cardSmallList = [
    {
      icon: 'image/facebook.png',
      pageViews: '1087',
      growth: 15,
      key: 1,
    },
    {
      icon: 'image/twitter.png',
      pageViews: '52',
      growth: 7,
      key: 2,
    },
    {
      icon: 'image/instagram24.png',
      pageViews: '542',
      growth: 25,
      key: 3,
    },
    {
      icon: 'image/youtube.png',
      pageViews: '0',
      growth: 0,
      key: 4,
    },
  ];

  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          {cardSmallList.map(({ icon, pageViews, growth, key }) => (
            <Cardsmall icon={icon} key={key} pageviews={pageViews} growth={growth} />
          ))}
        </div>
      </div>
    </section>
  );
}
