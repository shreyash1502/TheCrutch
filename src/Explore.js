import React, { useEffect, useState } from 'react'
import { auth, provider , db} from './firebase';
import DataCard from './DataCard'
import NavbarComponent from './NavbarComponent';
function Explore() {
    const [equipmentList, setEquipments]=useState([]);
    const fetchData = async () => {
        const res = db.collection('Available');
        const data = await res.get();

        setEquipments(data.docs.map(item => item.data()))
    }
    useEffect(()=>{
        fetchData();
    },[])
    equipmentList.forEach(item=>{
        //console.log(item.description);
    })

  
    return ( 
        <>   
        <NavbarComponent style={{position:"Sticky"}}/>
       { equipmentList && equipmentList.map(eq=>(
        <div class="card-group">
        
        
        <div class="col-lg-6">
        
           <div  key={eq.uid}>
           <p> 
               <DataCard 
                    
                    equip={eq.equipment}
                    desc={eq.description}
                    /></p>
                    </div>
           
           
           </div>
           </div>
       ))
       
   }
   <div class="card-group">
  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    </>
    )

}

export default Explore
