import React, { Component } from "react";
import "./showBranches.scss";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export default class showBranches extends Component{

      render(){

        const{place,img,AddressNo,AddressRoad,AddressArea,contact} = this.props.branches;
        return(

          <div>
          <section className="container-fluid text-center">
  
          <div className="row">
        
          <article className="col-md-2"></article>

            <article className="col-sm-8 col-md-4">
              <img src={img} className="imgBrnch"/>
            </article>
          
        
            <article className="col-sm-12 col-md-4 txtpart">
        
              
              
              <h2> Our Branch At {place} </h2>  <br/>
              <p className="txtpart1">
        
              {AddressNo} <br/>
              {AddressRoad} <br/>
              {AddressArea} <br/><br/>
              {contact} <br/>
                
                
              </p>
        
            
            
          </article>

          <article className="col-md-2"></article>
          
          </div> 
        
        </section> <br/><br/></div>
      
      
      
      );
      }
      }