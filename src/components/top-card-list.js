import React from 'react';
import Card from './Crad';
import '../Styles/top-card-list.css';
import { generate as id } from 'shortid';

export default function TopCardList() {
  const cardListData = [
    {
      username: '@RajShimpi',
      followers: '623',
      todayFollowers: 12,
      icon: 'image/facebook.png',
      name: 'facebook',
    },
    {
      username: '@RajShimpi',
      followers: '23',
      todayFollowers: 0,
      icon: 'image/twitter.png',
      name: 'twitter',
    },
    {
      username: '@RajShimpi',
      followers: '227',
      todayFollowers: 8,
      icon: 'image/instagram24.png',
      name: 'instagram',
    },
    {
      username: '@RajShimpi',
      followers: '3',
      todayFollowers: 0,
      icon: 'image/youtube.png',
      name: 'youtube',
    },
  ];

  return (
    <section className="top-card">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <Card key={id()} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}
