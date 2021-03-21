import React from 'react'
import { Form, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import {Button} from '@material-ui/core'
import Navbar from 'react-bootstrap/Navbar'
import {Avatar} from "@material-ui/core";
import './NavbarComponent.css'
import { auth, provider } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DonateComponent from './DonateComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 10,
    border: 0,
    color: 'white',
    height: 48,
    textDecoration: 'none',
    width:150,
    padding: '0 30px',
    marginLeft:'10px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  };
function NavbarComponent() {

    const [user,loading]=useAuthState(auth);
    const SignIn=e=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>alert(error.message ));

    };
    const notify=()=>{
        if(!user)
        toast.error("You need to login first ! ", {position:toast.POSITION.TOP_CENTER});
        
    };
    return (
        <div>
           
          
  <Navbar  className="sticky-nav"  >
  
  
   
    <Nav className="mr-auto">
        
      
     {user ? (
         <>
         <Avatar style={{ marginRight:"20px"}}src={user?.photoURL}/>
         <Navbar.Brand style={{color:"#7e685a"}}href="/profile">{user?.displayName}</Navbar.Brand>
      <Button style={style} type="submit" onClick={()=>auth.signOut()}>Logout</Button>

      <Link style={{textDecoration: 'none'}} to="/profile">
     <Button style={style} className="mr-2"  variant="outline-success" >Profile</Button>
     </Link>

     </>
     ):(
         <>
         
        <Button style={style}  variant="contained" type="submit" onClick={SignIn}>Login</Button>
        </>
     ) }
        <Link style={{textDecoration: 'none'}} to="/donate">
     <Button style={style} className="mr-2"  variant="outline-success" onClick={notify}>Donate</Button>
     </Link>
       

     <Link style={{textDecoration: 'none'}} to="/demand">
     <Button style={style} className="mr-2"  variant="outline-success" onClick={notify}>Demand</Button>
     </Link>
    
      
      
      
      <Link style={{textDecoration: 'none'}} to="/">
     <Button style={style} className="mr-2"  variant="outline-success">Home</Button>
     </Link>
   
    </Nav>
    {/* <Form inline>
      <FormControl style={{color:"#7e685a"}}type="text" placeholder="Search" className="mr-sm-2" />
      <Button style={style} variant="outline-success">Search</Button>
    </Form> */}
  </Navbar>
 
        </div>
    )
}

export default NavbarComponent;
