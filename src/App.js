import React from 'react';
import TopBar from './components/scripts/top-bar';
import Footer from './components/scripts/footer';
import HeroBanner from './components/scripts/herobanner';
import Gallery from './views/gallery';
import GalleryDetail from './views/GalleryDetail'; // Import trang chi tiết Gallery
import About from './components/scripts/AboutUs';  // Trang AboutUs
import Contact from './components/scripts/Contact'; // Trang Contact
import SkinLaser from './components/scripts/SkinLaserPage';
import Services from './views/service'; // Thêm import cho Services component
import ServiceDetail from './views/serviceDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Sử dụng Switch thay Routes

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopBar />
          <Switch>
            <Route exact path="/" component={HeroBanner} />
            <Route exact path="/gallery" component={Gallery} />
            <Route path="/gallery/:id" component={GalleryDetail} /> {/* Thêm Route chi tiết Gallery */}
            <Route path="/about" component={About} />
            <Route path="/SkinLaserPage" component={SkinLaser} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
            <Route path="/service-detail/:id" component={ServiceDetail} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
