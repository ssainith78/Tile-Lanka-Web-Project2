import React, { Component } from "react";
import "./products.scss";
import {Route, Link} from "react-router-dom";

export default class productsBar extends Component{


    render(){
        return(

            <div className="container-fluid my-3 mx-auto py-5 text-center"><br/><br/><br/><br/><br/><br/>
                <div className="row mx-auto text-center">
                    <div className="col-sm-6 col-lg-6 mx-auto d-flex cls111 text-center justify-content-center ">
                    <Link to="/home"> <button className="btn btn-outline-secondary mx-1 btncls">
                         View All
                        </button></Link>
                    <Link to="/brtls"> <button className="btn btn-outline-secondary mx-1 btncls">
                         Bathroom Tiles 
                        </button></Link>
                        <Link to="/hm-hmtls">  <button className="btn btn-outline-secondary mx-1 btncls">
                       Floor Tiles
                        </button></Link>
                        <Link to="/hm-kctls"> <button className="btn btn-outline-secondary mx-1 btncls">
                        Kitchen Tiles
                        </button></Link>
                    </div>
                </div>
            

            </div>
        );
    }}