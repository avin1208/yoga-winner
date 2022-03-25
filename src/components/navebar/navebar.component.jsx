import React from "react";

import './navebar.styles.scss';

const Navebar = () => {
    return(
       <div className="Navebar">
           <div className="options">
             <div className="option">Home</div> 
             <div className="option">Men</div>             
             <div className="option">Ladies</div>   
             <div className="option">Kids</div>   
             <div className="option">Accessories</div>   
             <div className="option">Blog</div>
             <div className="option">About us</div>    
           </div>
       </div>
    );
};

export default Navebar;