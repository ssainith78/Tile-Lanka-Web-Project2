import React, { Component } from "react";
import "./branches.scss";
import Branches from "../showBranches/showBranches";
import { BranchesDetails } from "../branchesList";
import {Route, Link} from "react-router-dom";

export default class branches extends Component{

/* Products Tab */ 

    state = {
            branch : BranchesDetails
    };

    render(){

       const {branch} = this.state;


        return( 


            <div className="new10 my-3"><br/>
     
            

 <section className="brnchpL my-3">


            {branch.map(branches =>{

            if (branches.variety == "Floor Tiles" ) {
                return(
                    <Branches key={branches.id} branches={branches} />
                );
            }
            })}

</section><br/>


 

<section className="brnchpL my-3">

          {branch.map(branches =>{

          if (branches.variety == "Kitchen Tiles") {
              return(
                  <Branches key={branches.id} branches={branches} />
              );
          }
          })}

</section><br/>




<section className="brnchpL my-3">

          {branch.map(branches =>{

          if (branches.variety == "Bathroom Tiles") {
              return(
                  <Branches key={branches.id} branches={branches} />
              );
          }
          })}

</section>

</div>



        );
    }
}