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
           <div style={{display:"flex",flexDirection:"row"}} key={eq.uid}> 
               <DataCard 
                    style={{display:"flex",flexDirection:"row"}}
                    equip={eq.equipment}
                    desc={eq.description}
                    />
           </div>
       ))
       
   }
    </>
    )

}

export default Explore
