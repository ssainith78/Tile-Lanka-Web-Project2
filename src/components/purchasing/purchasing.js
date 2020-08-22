import React, { Component } from "react";
import "./purchasing.scss";
import img1 from "./ac.jpg";


export default class purchasing extends Component{

    render(){

      const{name,img,variety,price,material,size,thickness} = this.props.products; 

        return(
            
    
    <article className="container-fluid mainCls">
    
    <div className="row">

{/*Line One */}
    <div className="my-3 mx-auto ">
    <div>
      <div className="img-container">
    <img src={img} className="card-img-top car-img featured-photo"/>
  </div>
    <div className="card-body">
    <div className="car-info d-flex justify-content-between">

      <div className="car-text text-uppercase">
        <h6 className="font-weight-bold">{name}</h6>
        <h6>{variety}</h6>
      </div>

      <h5 className="car-value align-self-center py-2 px-3">
        <span> Price : {price} </span>
      </h5>
    </div>    
  </div>

  <div className="card-footer text-capitalize d-flex justify-content-between">
    <p><span><i className="fas fa-car"></i></span>Material: {material}</p>
    <p><span><i className="fas fa-cogs"></i></span>Size: {size}</p>
  </div>
</div> 
</div>

 
</div>  
</article>



);
}
}