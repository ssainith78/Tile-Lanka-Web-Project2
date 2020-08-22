import React, { Component } from "react";
import "./imgslide.scss";
import { Link } from "react-router-dom";

export default class imgslide extends Component{

    render(){
        return( 
            <div> 
            <section className="my-3">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="7000">

  <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>

      <div className="carousel-inner" role="listbox">
                 
                  <div className="carousel-item active cls01">
                    
                </div>

                <div className="carousel-item cls02">
 
                </div>
              
              
                  <div className="carousel-item cls03">
 
                </div>

             
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>

      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
</div>
</div>
          
         
            </section>
            
            {/*}Sliding Text*/}

            <marquee behaviour="alternate" className="box1"> 
<h1  className="marqueetxt"> Sample Heading to check the animation in notepad++ for the final project which is related to database system
  Sample Heading to check the animation in notepad++ for the final project which is related to database system Sample Heading to check the animation 
  in notepad++ for the final project which is related to database system Sample Heading to check the animation in notepad++ for the final project 
  which is related to database system Sample Heading to check the animation in notepad++ for the final project which is related to database system </h1> </marquee>
<hr/>

</div>


            );
       
    }
}