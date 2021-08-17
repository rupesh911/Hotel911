import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuapi.js"
import MenuCard from "./MenuCard.js"


const Hotel = () => {
    const [menuData, setMenudata] = useState(Menu)
    
    const filterItem = (category) => {
        const updatedList= Menu.filter((curElem)=>{
            return curElem.category === category
        } );
        setMenudata(updatedList)
    };
  
    return (
       
        <>
         <nav className="navbar">
            <div className="btn-group_item">
                <button className="btn"onClick={() => filterItem("breakfast")}>
                breakfast</button>
                <button className="btn"onClick={() => filterItem("lunch")} >lunch</button>
                <button className="btn"onClick={() => filterItem("evening")}>Evening</button>
                <button className="btn"onClick={() => filterItem("dinner")}>Dinner</button>
                <button className="btn"onClick={() => setMenudata(Menu)}>All</button>
                </div>
                 </nav>
                 
       
        <MenuCard menuData={menuData}/>
     
        </>
    )
}

export default Hotel
