import React, { useState } from "react";
import "./style.css";
import Items from "./itemlist.js";
import Itemcard from "./itemcard";
import Navbar from "./navbar";


const uniqueList=[
  ...new Set(
    Items.map((curElem)=>{
      return curElem.category;
    }
    )
  ),
  "All",
];
const Shop = () => {
  
    const [itemData, setitemData] = useState(Items);
    const [itemList, setitemList] = useState(uniqueList);
    
    const filterItem=(category)=>{
      if(category ==="All"){
        setitemData(Items);
        return;
      }
      const updatedList=Items.filter((curElem)=>{
        return curElem.category===category;
      }) ;

      setitemData(updatedList);
    };
    return(
      <>
        
        <Navbar filterItem={filterItem} itemList={itemList}/>
        <Itemcard itemData={itemData}/>
      </>
    );
};

export default Shop;