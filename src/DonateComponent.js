import React, { useState } from 'react'
import {  Form } from 'react-bootstrap'
import NavbarComponent from './NavbarComponent'
import {Button} from '@material-ui/core'
import { auth, provider , db} from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DonateComponent.css'

toast.configure();
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
function DonateComponent() {
    const [user]=useAuthState(auth);
    const [name, setName]=useState("");
    const [equipment, setEquipment]=useState("");
    const [description, setDescription]=useState("");
    const [quantity, setQuantity]=useState("");
    const [address, setAddress]=useState("");
    const[mail, setMail]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();

        db.collection("Available").add({
          mail:mail,
          name:name,
          equipment:equipment,
          description:description,
          address:address,
        })
        .then(()=>{
            alert("Submitted Successfully 👍")
        })
        .catch((error)=>{alert(error.message);});
    
        setAddress("");
        setName("");
        setQuantity("");
        setDescription("");
        setEquipment("");
        setMail("");
      };
    return (
        <div>
            {
                user?(
                    <>
                     <NavbarComponent/>
            <Form className="donateForm">
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Donated by : </Form.Label>
    <Form.Control className="control" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Institution name" />
  </Form.Group>
  
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address :</Form.Label>
    <Form.Control type="email" value={mail} onChange={(e)=>setMail(e.target.value)} placeholder={user.email} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Equipment</Form.Label>
    <Form.Control type="text" value={equipment} onChange={(e)=>setEquipment(e.target.value)} placeholder="Equipment" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label> Description of Equipment</Form.Label>
    <Form.Control type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Describe the condition of your equipment" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>quantity</Form.Label>
    <Form.Control type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder="quantity" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Age</Form.Label>
    <Form.Control type="Number" placeholder="Age" />
  </Form.Group>
  
    
  <Button style={style} onClick={handleSubmit} type="submit">
    Submit
  </Button>
</Form>
                    </>
                ):(<>
                
                 <Redirect to="/"/>
                    
                </>)
            }
           
        </div>
    )
}

export default DonateComponent
