import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Banner from './components/Banner/Banner';
import DailyShobji from './components/DailyShobji/DailyShobji';
import PlanWork from './components/PlanWork/PlanWork';
import Footer from './components/Footer/Footer';
import './App.css';
import Delivery from './components/Delivery/Delivery';
import Package from './components/Package/Package';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddPackage = (packageData) => {
      setCart([...cart, packageData]);
  }
  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  }

  const backdropClickhandler = () => {
    setSideDrawerOpen(false);
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Toolbar cart={cart} drawerToggleClickHandler={drawerToggleClickHandler} />
            {
              sideDrawerOpen && <SideDrawer show={sideDrawerOpen} close={backdropClickhandler} />
            }
            {sideDrawerOpen && <Backdrop click={backdropClickhandler} />}
            <Banner />
            <Delivery />
            <DailyShobji />
            <PlanWork />
            <Footer />
          </Route>
          <Route path="/package">
            <Toolbar cart={cart} drawerToggleClickHandler={drawerToggleClickHandler} />
            {
              sideDrawerOpen && <SideDrawer show={sideDrawerOpen} />
            }
            {sideDrawerOpen && <Backdrop click={backdropClickhandler} />}
            <Package handleAddPackage={handleAddPackage} />
            <DailyShobji />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
