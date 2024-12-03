import React from 'react';
import './App.css';
import TopBar from './top-bar';
import HeroBanner from './herobanner';
import Spa from './spa';
import Massage from './massage';
import Footer from './footer';

class App extends React.Component{
  render(){
      return(
          <div className="App">
              <TopBar/>
              <HeroBanner/>
              <Spa/>
              <Massage/>
              <Footer/>
          </div>
      );
  }
}


export default App;
