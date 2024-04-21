import React from 'react';
import Card from './Crad';
import '../Styles/top-card-list.css';
import { generate as id } from 'shortid';

export default function TopCardList() {
  const cardListData = [
    {
      username: '@RajShimpi',
      followers: '623',
      todayFollowers: 37,
      icon: 'image/facebook.png',
      name: 'facebook',
    },
    {
      username: '@RajShimpi',
      followers: '478',
      todayFollowers: 57,
      icon: 'image/twitter.png',
      name: 'twitter',
    },
    {
      username: '@RajShimpi',
      followers: '238',
      todayFollowers: 14,
      icon: 'image/instagram24.png',
      name: 'instagram',
    },
    {
      username: '@RajShimpi',
      followers: '258',
      todayFollowers: 7,
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
