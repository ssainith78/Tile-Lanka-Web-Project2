import React, { Component } from "react";
import "./about.scss";
import { Link } from "react-router-dom";

export default class about extends Component{

    render(){
        return( 
            <div>
         
            <section className="my-3">
            <div id="carouselExampleIndicators" class="carousel slide height-max2" data-ride="carousel" data-interval="7000">

  <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>

      <div class="carousel-inner" role="listbox">
                 
                  <div className="carousel-item active cls01-1">
                    
                </div>

                <div className="carousel-item cls02-2">
 
                </div>
              
              
                  <div className="carousel-item cls03-3">
 
                </div>

             
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
</div>
</div>
          
         
            </section>

</div>

            );
       
    }
}