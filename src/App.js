import logo from './logo.svg';
import './App.css';
import Home from './Home'
import CarouselComponent from './CarouselComponent';
import { useAuthState } from 'react-firebase-hooks/auth';
import NavbarComponent from './NavbarComponent'
import DonateComponent from './DonateComponent'
import Header from './Header'
import Explore from './Explore'

import { auth, provider } from './firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from 'react-bootstrap';
function App() {
  const [user]=useAuthState(auth);
  return (
    <div className="App">
    <Router>
    <Switch> 
      <Route path="/" exact>
     
      <Home/>
      </Route>
      
      
        <Route path="/donate" exact>
          <DonateComponent/>
        </Route>
        <Route path="/data" exact>
          <p>LOL</p>
        </Route>
        </Switch>
        </Router>
      <br/>
   

    </div>
  
  );
}

export default App;
