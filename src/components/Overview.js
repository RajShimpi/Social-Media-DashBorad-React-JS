// import React from 'react';
// import Cardsmall from './Card-small';
// import '../Styles/Overview.css';

// export default function Overview() {
//     const cardSmallList=[
//         {
//             icon:'image/facebook.png',
//             pageViews:'87',
//             growth:3,
//             key:1
//         },
//         {
//             icon:'image/twitter.png',
//             pageViews:'52',
//             growth:2257,
//             key:2
//         },
//         {
//             icon:'image/instagram24.png',
//             pageViews:'5462',
//             growth:1375,
//             key:3
//         },
//         {
//             icon:'image/youtube.png',
//             pageViews:'117',
//             growth:303,
//             key:4
//         }
//     ]
//   return (
//     <section className="overview">
//         <div className="wrapper">
//             <h2>Overview - Today</h2>
//             <div className="grid">
//                 {
//                     cardSmallList.map(({icon,pageViews,growth,key})=>{
//                         <Cardsmall icon={icon} key={key} pageviews={pageViews} growth={growth}/>
//                     })
//                 }
//             </div>
//         </div>
//     </section>
//   )
// }

import React from 'react';
import Cardsmall from './Card-small';
import '../Styles/Overview.css';

export default function Overview() {
  const cardSmallList = [
    {
      icon: 'image/facebook.png',
      pageViews: '87',
      growth: 3,
      key: 1,
    },
    {
      icon: 'image/twitter.png',
      pageViews: '52',
      growth: 2257,
      key: 2,
    },
    {
      icon: 'image/instagram24.png',
      pageViews: '5462',
      growth: 1375,
      key: 3,
    },
    {
      icon: 'image/youtube.png',
      pageViews: '117',
      growth: 303,
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
