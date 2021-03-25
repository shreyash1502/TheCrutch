
import './App.css';
import Home from './Home'
import CarouselComponent from './CarouselComponent';
import { useAuthState } from 'react-firebase-hooks/auth';
import NavbarComponent from './NavbarComponent'
import DonateComponent from './DonateComponent'
import Header from './Header'
import Explore from './Explore'
import Profile from './Profile'
import Demand from './Demand'
import { auth, provider } from './firebase';
import HomeUI from './Components/HomeUI'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
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
      
        <Route path="/profile" exact>
        <Profile/>
        </Route>
        <Route path='/data'>
          <HomeUI/>
        </Route>
        <Route path="/demand" exact>
        <Demand/>
        <Route path="newhome">
          <HomeUI/>
        </Route>
        </Route>
        <Redirect to="/"/>
        </Switch>
        </Router>
       
     
        
 
   

    </div>
  
  );
}

export default App;
