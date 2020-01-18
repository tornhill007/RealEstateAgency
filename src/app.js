import React from 'react';
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MainContainer from './containers/MainContainer'
import configureStore from './utils/store';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import Catalog from "./components/Catalog/Catalog";
import BreadScrumbs from "./components/Navbar/BreadScrumbs";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import './common/style/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main/Main";
import Selling from "./components/Selling/Selling";
import Login from "./components/Login/Login";
import HeaderContainer from "./components/Header/HeaderContainer";
import Register from "./components/Register/Register";
import Sidebar from "./components/Sidebar/Sidebar";
import Missions from "./components/About/Missions/Missions";
import Goals from "./components/About/Goals/Goals";
import Jobs from "./components/About/Jobs/Jobs";
import JobsPosition from "./components/About/Jobs/JobsPosition";
import RealtorsContainer from "./components/About/Realtors/RealtorsContainer";
import ApartmentContentContainer from "./components/Catalog/ApartmentContent/ApartmentContentContainer";


function App() {
  return (
      <div>
          <HeaderContainer/>
          {/*<BreadScrumbs/>*/}
          <Sidebar/>
            <div>
                <Switch>
                    {/*<Route exact path="/home">*/}
                    {/*    <MainContainer/>*/}
                    {/*</Route>*/}
                    <Route path="/main">
                        <Main/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/catalog/:id" component={ApartmentContentContainer}/>

                    <Route path="/catalog" component={Catalog}/>

                    <Route path="/contacts">
                        <Contacts/>
                    </Route>
                    <Route path="/reviews">
                        <Reviews/>
                    </Route>
                    <Route path="/selling">
                        <Selling/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/mission">
                        <Missions/>
                    </Route>
                    <Route path="/goals">
                        <Goals/>
                    </Route>
                    <Route path="/jobs/:id" component={JobsPosition} />
                    <Route path="/jobs" component={Jobs} />
                    <Route path="/realtors">
                        <RealtorsContainer/>
                    </Route>
                </Switch>
            </div>
          <Footer/>
      </div>
  );
}

export default App;
