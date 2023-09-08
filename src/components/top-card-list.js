// import React from 'react';
// import Card from './Crad';
// import '../Styles/top-card-list.css';
// import {generate as id} from 'shortid'

// export default function TopCardList() {
//     const carListData=[
//         {
//             username:'@pepito',
//             followers:'1486',
//             todayFollowers:12,
//             icon:'image/facebook.png',
//             name:'facebook'
//         },
//         {
//             username:'@luisa',
//             followers:'28540',
//             todayFollowers:20,
//             icon:'image/twitter.png',
//             name:'twitter'
//         },
//         {
//             username:'@osvaldo',
//             followers:'4550',
//             todayFollowers:30,
//             icon:'image/instagram24.png',
//             name:'instagram'
//         },
//         {
//             username:'@jose',
//             followers:'4140',
//             todayFollowers:-50,
//             icon:'image/youtube.png',
//             name:'youtube'
//         },
//     ]
//   return (
//     <section className="top-card">
//         <div className="wrapper">
//             <div className="grid">
//                 {
//                     carListData.map((cardData)=><Card key= {id}{...cardData}/>)
//                 }
//             </div>
//         </div>
//     </section>
//   )
// }
import React from 'react';
import Card from './Crad';
import '../Styles/top-card-list.css';
import { generate as id } from 'shortid';

export default function TopCardList() {
  const cardListData = [
    {
      username: '@pepito',
      followers: '1486',
      todayFollowers: 12,
      icon: 'image/facebook.png',
      name: 'facebook',
    },
    {
      username: '@luisa',
      followers: '28540',
      todayFollowers: 20,
      icon: 'image/twitter.png',
      name: 'twitter',
    },
    {
      username: '@osvaldo',
      followers: '4550',
      todayFollowers: 30,
      icon: 'image/instagram24.png',
      name: 'instagram',
    },
    {
      username: '@jose',
      followers: '4140',
      todayFollowers: -50,
      icon: 'image/youtube.png',
      name: 'youtube',
    },
  ];

  return (
    <section className="top-card">
      <div className="wrapper">
        <div className="grid">
          {cardListData.map((cardData) => (
            <Card key={id()} {...cardData} /> // Generate a unique key
          ))}
        </div>
      </div>
    </section>
  );
}
