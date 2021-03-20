import React, { useState } from 'react'
import { auth, provider , db} from './firebase';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Explore() {
    const handleSubmit=()=>{
        db.collection("Available").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.data().mail);
                // console.log(doc.data().name);
            });
        });
    }
    return (
        <div>
            <Link to="/data">
            <button onClick={handleSubmit}>show</button>
            </Link>
        </div>
    )
}

export default Explore
