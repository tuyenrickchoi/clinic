import React from 'react';
import TopBar from './components/scripts/top-bar';
import Footer from './components/scripts/footer';
import HeroBanner from './components/scripts/herobanner';
import Gallery from './views/gallery';
import GalleryDetail from './views/GalleryDetail';
import About from './components/scripts/AboutUs';
import Contact from './components/scripts/Contact';
import SkinLaser from './components/scripts/SkinLaserPage';
import Services from './views/service';
import ShoppingCart from './views/shoppingCart';
import adminPage from './views/adminPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './components/scripts/cartContext';

class App extends React.Component {
  render() {
    return (
      <Router>
        <CartProvider>
          <div className="App">
            <TopBar /> {/* Remove cartItems prop */}
            <Switch>
              <Route exact path="/" component={HeroBanner} />
              <Route exact path="/gallery" component={Gallery} />
              <Route path="/gallery/:id" component={GalleryDetail} />
              <Route path="/about" component={About} />
              <Route path="/SkinLaserPage" component={SkinLaser} />
              <Route path="/contact" component={Contact} />
              <Route path="/services" component={Services} />
              <Route path="/shoppingcart" component={ShoppingCart} />
              <Route path="/admin" component={adminPage} />
            </Switch>
            <Footer />
          </div>
        </CartProvider>
      </Router>
    );
  }
}

export default App;
