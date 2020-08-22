import React from "react";
import logo1 from "./tlanka.jpg";
import "./navbar.scss";
import "../../css/bootstrap.min.css";
import "../../js/all.js";
import {Link} from "react-router-dom";


export default function navbar(){
     return (<nav  className="navbar fixed-top navbar-expand-lg px-3">

     <a href="#" className="navbar-brand logo-img">
     <Link to="/"><img src={logo1}/></Link>
     </a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbar">
 
       <span className="navbar-icon">
         <i className="fas fa-align-right"></i>
       </span>
     </button>
 
     <div className="navbar-collapse collapse" id="mainNavbar">
       <ul className="nav navbar-nav mx-auto" id="nv-nv">
 
       
       <li><a className="nav-link dropbtn"> <Link className="linkCls" to="/home">&#9776;Products</Link></a></li>
 
     
         <li><a className="nav-link dropbtn"><Link className="linkCls" to="/branches">&#9776;Branches</Link></a></li>
 
 
         <li><a className="nav-link dropbtn"><Link className="linkCls" to="/contact">&#9776;Contact</Link></a></li>
 
 
         <li><a className="nav-link dropbtn"><Link className="linkCls" to="/about">&#9776;About</Link></a></li>
 
 
       </ul>
 
       <div className="nav-icons d-none d-lg-block">
           <a href="#" className="nav-icon">
             <i className="fas fa-search"></i>
           </a>
           <a href="#" className="nav-icon">
             <i className="fas fa-user-alt"></i>
           </a>
           
       </div>
     </div>
  </nav>

     );
}