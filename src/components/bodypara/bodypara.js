import React, { Component } from "react";
import "./bodypara.scss";
import img1 from "./c.png";
import img2 from "./bb.jpg";

export default class bodypara extends Component{


    render(){
        return(<section>
        <div id="carouselExampleIndicators" className="carousel slide height-max2 my-3" data-ride="carousel">

  <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>

      <div className="carousel-inner" role="listbox">
        
          {/*<div className="carousel-item carousel-item2 carousel-adjustm active 
          col d-flex flex-wrap justify-content-center">*/}

          <div className="carousel-item active carousel-item2">

            <div className="banner-center banner-center2 text-center">
              <a href="#">The Largest Tiles Store</a>
    
    
            </div>
            
        </div>
      
          {/*Slider 02*/}
          <div className="carousel-item carousel-item2">
  
            <div className="banner-center banner-center2 text-center">
              <a href="#">Best Choice For You</a>
    
    
            </div>
  
        </div>
  
        {/*Slider 03*/}
        <div className="carousel-item carousel-item2">
  
          <div className="banner-center banner-center2 text-center">
            <a href="#">Welcome To Our Website</a>

          </div>    
      </div>
    </div>
  </div>
  <hr/>

{/* 1st paragraph design*/}
<section className="container-fluid text-center">
  
  <div className="row adjstCol">

    <article className="col-sm-12 col-md-6">
      <img src={img1} className="img1"/>
    </article>
  

    <article className="col-sm-12 col-md-6 txtpart">

      
      
      <h2> All About Our Products </h2>  <br/>
      <p className="txtpart1">Imagine a world surrounded by the sublime aesthetics of your dreams. 
      A world in which your thoughts stand out as a testament to your lifestyle,
       making you stand out from the norm. A world where true beauty transcends 
       time. Rocell, the name synonymous with elegant surface covering and sanitaryware 
       has been set out to do just that. At Rocell, we believe in drawing inspiration 
       from modern works of art, while offering the functionality of everyday living. 
       Our products are an extension of your living space.<br/><br/>

      The space that reflects your individuality; in your personality, your imagination. 
      Built firmly on the foundations of design, innovation, quality and integrity, Rocell 
      is a brand that sets out to influence lifestyle and inspire creativity... <br/><br/>
        
        
      <a href="#" className="btn btn-secondary lmore" onClick={() => this.handleClick()}> Learn More</a></p>

    
    
  </article>

  
  </div> 

</section>
<hr/>



{/* 2nd paragraph design*/}
<section className="container-fluid text-center">
  
<div className="row adjstCol">


  <article className="col-sm-12 col-md-6 txtpart">

    
    <h2> All About Our Products </h2>  <br/>
    <p className="txtpart1">Imagine a world surrounded by the sublime aesthetics of your dreams. 
      A world in which your thoughts stand out as a testament to your lifestyle,
       making you stand out from the norm. A world where true beauty transcends 
       time. Rocell, the name synonymous with elegant surface covering and sanitaryware 
       has been set out to do just that. At Rocell, we believe in drawing inspiration 
       from modern works of art, while offering the functionality of everyday living. 
       Our products are an extension of your living space.<br/><br/>

      The space that reflects your individuality; in your personality, your imagination. 
      Built firmly on the foundations of design, innovation, quality and integrity, Rocell 
      is a brand that sets out to influence lifestyle and inspire creativity... <br/><br/>
        
        
      <a href="#" class="btn btn-secondary lmore"> Learn More</a>
    </p>
    
  </article>

<article class="col-sm-12 col-md-6 ">
  <img src={img2} class="img1"/> 
</article>

</div> 

</section>
<hr/>

<h1 class="new1 text-center"> Selections Are Here... </h1>

<hr/>
</section>


        );
    }
}