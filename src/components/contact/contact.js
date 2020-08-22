import React, { Component } from "react";
import "./contact.scss";

export default class ontact extends Component{


    render(){
        return(


<section id="contact" className="cntctCls my-3 container-fluid text-center"><br/><br/><br/>

<section>
        <div id="carouselExampleIndicators" className="carousel slide height-max2 my-3" data-ride="carousel">

  <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>

      <div className="carousel-inner" role="listbox">
        

          <div className="carousel-item active carousel-item2">

            <div className="banner-center banner-center2 text-center">
              <a href="#">The Largest Tiles Store</a>
    
    
            </div>
            
        </div>
      
          <div className="carousel-item carousel-item2">
  
            <div className="banner-center banner-center2 text-center">
              <a href="#">Best Choice For You</a>
    
    
            </div>
  
        </div>
 
        <div className="carousel-item carousel-item2">
  
          <div className="banner-center banner-center2 text-center">
            <a href="#">Welcome To Our Website</a>

          </div>    
      </div>
    </div>
  </div>
  <hr/>
  </section>

<div class="title">
            
            <h1 class="display-4">Contact Us</h1>
            <div class="title-underline"></div><br/>
            
  </div>

  <div>
      <div class="col-sm-12">
          <form>
              <div class="form-group">
                  <input type="text" id="firstname" class="form-control input-lg" placeholder="First Name"/>
              </div>

              <div class="form-group">
                  <input type="text" id="lastname" class="form-control input-lg" placeholder="Last Name"/>
              </div>

              <div class="form-group">
                  <input type="text" id="email" class="form-control input-lg" placeholder="Email Address"/>
              </div>

              <div class="form-group">
                  <input type="text" id="mobile" class="form-control input-lg" placeholder="Mobile Number"/>
              </div>
            
            <button type="submit" class="btn btn-block">Submit</button>

          </form>
      </div>
  </div>
    
</section>

);
        }}