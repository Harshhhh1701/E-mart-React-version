import React from 'react'

const Itemcard = ({itemData}) => {
  return (
    <>
      <section className="main-card--container">
        {itemData.map((curElem)=>{
          const { id,name,category,image,description }=curElem;

          return(
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="class-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">{description}</span>
                    <div className="card-read">More</div>
                    <img src={image} alt="images" className="card-media" />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>
            </>
          );
        })

        }

      </section>
    </>
  );
};

export default Itemcard;