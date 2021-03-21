import React from "react";
import web3 from "../src/img6.png";
import NavbarComponent from './NavbarComponent';
import { auth, provider } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Profile = () =>{
  const[user,loading]=useAuthState(auth);
	return(
		<>
		<NavbarComponent/>
        <div className="my-3">
                <h1 className="text-center"> My Profile </h1>
            </div>
                    <div class="card mb-3 " >
  <div className="row g-0 bg-warning ">
    <div className="col-md-1 justify-content-center mx-auto ">
      <img src={web3} alt="..." className="animatedtwice"/>
    </div>
    <div class="col-md-8 text-center">
      <div class="card-body">
        <h1 style={{fontSize:"50px"}} class="card-title">{user.displayName} </h1>
        <p class="card-text">
        <center><h4>
        Age: 21<br/>
            State: WEST BENGAL<br/>
            Item Donated: 8<br/>
            
            </h4>
        </center>  
        </p>
          
          <p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Watch History of Donation</a>&nbsp;&nbsp;&nbsp;&nbsp;
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Current Wishlist</button>&nbsp;&nbsp;&nbsp;&nbsp;
              <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Additional Info</button>
  
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
    <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample3">
      <div class="card card-body">
        Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
</div>
          
          
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        <br/>
    </>
		);

}; 

export default Profile;
