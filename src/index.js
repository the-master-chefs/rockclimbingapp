import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import HomePage from "./pages/HomePage/index.js";
 import CragSearch from "./pages/CragSearch/index.js";
 import BelayPartner from "./pages/BelayPartner/index";
 import Community from "./pages/Community/index.js";
 import MeetUp from "./pages/MeetUp/index.js";
 import NoMatch from "./pages/NoMatch/index.js";
 import AugRealRoutes from "./pages/AugRealRoutes/index";
 import SignIn from "./pages/SignUp";
 import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


const routing = (
       <Router>
         <div>
         <Switch>
           <Route exact path="/" component={HomePage} />
           <Route path="/cragsearch" component={CragSearch} />
           <Route path="/belaypartner" component={BelayPartner} />
           <Route path="/community" component={Community} />
           <Route path="/meetup" component={MeetUp} />
           <Route path="/signup" component={SignIn} />
           <Route path="/augrealroutes" component={AugRealRoutes} />
           <Route component={NoMatch} />
         </Switch>
         </div>
       </Router>
     );

     ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
 //unregister() to register() below. Note this comes with some pitfalls.
 //Learn more about service workers: https:bit.ly/CRA-PWA
serviceWorker.unregister();
