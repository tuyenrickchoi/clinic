import React from 'react';
import './App.css';
import TopBar from './top-bar';
import HeroBanner from './herobanner';
import Spa from './spa';
import Massage from './massage';
import Footer from './footer';
import Service from './Service'; // Trang Services
import Gallery from './Gallery'; // Trang Gallery
import About from './AboutUs';  // Trang AboutUs
import Contact from './Contact'; // Trang Contact
import SkinLaser from './SkinLaserPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Sử dụng Switch thay Routes

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopBar />
          <Switch>
  <Route exact path="/" component={HeroBanner} />
  <Route path="/services" component={Service} />
  <Route path="/gallery" component={Gallery} />
  <Route path="/about" component={About} />
  <Route path="/SkinLaserPage" component={SkinLaser} />
  <Route path="/contact" component={Contact} /> 
</Switch>
        </div>
      </Router>
    );
    
  }
  
}

export default App;
