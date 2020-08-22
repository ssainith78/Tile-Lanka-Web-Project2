import React, { Component } from "react";
import "./products.scss";
import Products from "../purchasing/purchasing";
import { ProductsDetails } from "../productslist";

export default class productsBrTls extends Component{

    /* Products Tab */ 
    
        state = {
                product : ProductsDetails
        };
    
        render(){
    
           const {product} = this.state;
    
    
            return( 
    
       <div className="new10 my-3"><br/>

<div className="container">
    <div className="row mb-5">
        <div className="col d-flex flex-wrap justify-content-center">
<h1 className="align-self-center mx-1"> Bathroom</h1>
<h1 className="txt199 mx-1"> Tiles </h1>
</div></div></div>
<section className="purchList my-3">

          {product.map(products =>{

          if (products.variety == "Bathroom Tiles") {
              return(
                  <Products key={products.id} products={products} />
              );
          }
          })}

</section>

</div>

);
    }
}