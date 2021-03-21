import React from 'react'

function DataCard({equip, desc}) {
     console.log({equip});
     console.log({desc})
    return (
        <div >
            <p >{equip}</p>
            <p>{desc}</p>
        
        </div>
       
    )
}

export default DataCard
