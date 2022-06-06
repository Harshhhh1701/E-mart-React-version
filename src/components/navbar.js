import React from 'react'

const Navbar = ({filterItem,itemList}) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {
            itemList.map((curElem)=>{
              return (
                <button className="btn-group__item" onClick={()=>filterItem(curElem)}>{curElem}</button>
              );
            })
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;