import { Card } from '@material-ui/core';
import React from 'react'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './DataCard.css'
import NavbarComponent from './NavbarComponent'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function DataCard({equip, desc}) {
   
    return (
        <div className="card">
            <>
            <h4>{equip}</h4>
            <p>{desc}</p>
            <Popup  trigger ={ <Button className="button" size="small"> Request</Button>} >
                <div>
                <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    Name:
    <input type="text" name="name" />
  </label> <label>
    Name:
    <input type="text" name="name" />
  </label> <label>
    Name:
    <input type="text" name="name" />
  </label> <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
                </div>
            </Popup>
           </>  
        </div>
    )
}

export default DataCard
