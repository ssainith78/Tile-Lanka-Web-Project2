import React, { Component } from "react";
import "./purchasinglist.scss";
import Products from "../purchasing/purchasing";
import { ProductsDetails } from "../productslist";
import { Link } from "react-router-dom";


export default class purchasinglist extends Component{


    state = {
            product : ProductsDetails
    };

    render(){

       const {product} = this.state;

        return( 
    
        
        <div>
        
        
        <section className="purchList my-3">

            {product.map(products =>{

            if (products.id <= 6) {
                return(
                    <Products key={products.id} products={products} />
                );
            }

            })}

</section>


<Link to="/home"><a href="#" class="btn btn-block btn1" > View More Products...</a></Link>

</div>


        );
    }
}