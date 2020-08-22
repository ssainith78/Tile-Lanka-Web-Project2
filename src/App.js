import React, {Component} from 'react';
import Navbar from './components/navbar/navbar';
import Imgslide from './components/imgslide/imgslide';
import Bodypara from './components/bodypara/bodypara';
import Purchasinglist from './components/purchasinglist/purchasinglist';
import Products from './components/products/products';
import ProductsBar from './components/products/productsBar';
import ProductsBathTls from './components/products/productsBrTls';
import ProductsHmTls from './components/products/productsHmTls';
import ProductsKcTls from './components/products/productsKchTls';
import Footer from "./components/footer/footer";
import Conact from "./components/contact/contact";
import About from "./components/about/about";
import BranchesBar from "./components/branches/branchesar";

import Branches from './components/branches/branches';
import "./App.scss";
import {Route, Link} from "react-router-dom";

class App extends Component{

    

    render() { 

        return(
        
            <div className="App">

           <Navbar />


          <Route exact path="/">

           <Imgslide />
            <Bodypara />
            <Purchasinglist />

            </Route>

            <Route exact path="/home">

            <ProductsBar />

            <Products />

            </Route>

            <Route exact path="/brtls">

            <ProductsBar />

            <ProductsBathTls />
            </Route>

            <Route exact path="/hm-hmtls">

            <ProductsBar />

            <ProductsHmTls />
            </Route>

            <Route exact path="/hm-kctls">

            <ProductsBar />
            <ProductsKcTls />

            </Route>


            <Route exact path="/about">

            <About />
            <Bodypara />

            </Route>

            <Route exact path="/contact">

            <Conact />

            </Route>

            <Route exact path="/branches">

            <BranchesBar />
            <Branches />

            </Route>

            

            <Footer/>

       </div>

        );
    }
}

export default App;