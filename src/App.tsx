import React, { Component } from 'react';
import './styles/App.scss';
import Homepage from './containers/Homepage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Contact from './containers/Contact';
import Top from './containers/homepage/Top';
import LogoBar from './containers/homepage/LogoBar';
import Cleaning from './containers/cleaning/Cleaning';
import Reference from './containers/reference/Reference';
import Fabric from './containers/fabrics/Fabric';
import NiceMenu from './containers/homepage/NiceMenu';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify';
import ScrollToTop from './ScrollToTop';

toast.configure();

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Top />
          <LogoBar />
          <Switch>
            <Route path="/menu" component={NiceMenu} />
            <Route path="/kumas" component={Fabric} />
            <Route path="/referans" component={Reference} />
            <Route path="/temizleme" component={Cleaning} />
            <Route path="/iletisim" component={Contact} />
            <Route path="/" component={Homepage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
