import React, { Component } from "react";
import {Route, Link} from "react-router-dom";

export default class branchesar extends Component{


    render(){
        return(

            <div my-3><br/><br/><br/><br/><br/><br/><br/><br/>

            <div className="container">
                <div className="row mb-5">
                    <div className="col d-flex flex-wrap justify-content-center">
            <h1 className="align-self-center mx-1"> Retail</h1>
            <h1 className="txt199 mx-1"> Network </h1>
            </div></div></div>

            <div className="container-fluid my-3 mx-auto py-5 text-center">
                <div className="row mx-auto text-center">
                    <div className="col-sm-6 col-lg-6 mx-auto d-flex cls111 text-center justify-content-center ">
                    <Link to="/home"> <button className="btn btn-outline-secondary mx-1 btncls">
                         View All
                        </button></Link>
                    <Link to="/brtls"> <button className="btn btn-outline-secondary mx-1 btncls">
                         Colombo 
                        </button></Link>
                        <Link to="/hm-hmtls">  <button className="btn btn-outline-secondary mx-1 btncls">
                       Mattale
                        </button></Link>
                        <Link to="/hm-kctls"> <button className="btn btn-outline-secondary mx-1 btncls">
                        Kandy
                        </button></Link>
                    </div>
                </div>
                </div>

            </div>
        );
    }}