import React, { useEffect, useState } from 'react'
import { auth, provider , db} from './firebase';
import DataCard from './DataCard'
function Explore() {
    const [equipmentList, setEquipments]=useState([]);
    const fetchData=async()=>{
        const res=db.collection('Available');
        const data=await res.get();
        data.docs.forEach(item=>{
           // console.log(item.data());   
            setEquipments([...equipmentList, item.data()]);
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
    console.log(equipmentList)
    return (    
        equipmentList && equipmentList.map(eq=>{
            // console.log(eq.equipment);
            // console.log(eq.description); 
            
            return (
            <DataCard 
                key={eq.age}
                equip={eq.equipment}
                desc={eq.description}
            />
            )
        })
     
    )
}

export default Explore
