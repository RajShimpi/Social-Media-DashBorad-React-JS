import React from 'react'
import './Styles/global.css';
import Header from './components/Header.js'
import TopCardList from './components/top-card-list.js'
import Overview from './components/Overview.js'
import Switch from './components/Switch.js'
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Header>
      <Switch/>
    </Header>
    <TopCardList/>
    <Overview/>
    <Footer/>
    </>
  );
}

export default App;
