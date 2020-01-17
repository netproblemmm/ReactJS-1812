import React from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '../main/main'
import Banner from '../banner/banner'
import Banket from'../banket/banket'
import Dostavka from '../dostavka/dostavka'
import Xogo from '../xogo/xogo'
import About from '../about/about'
import Contact from '../contact/contact'
import Salad from '../salad/salad'
import Soup from '../soup/soup'
import HotSnack from '../hot-snack/hot-snack'
import ColdSnack from '../cold-snack/cold-snack'
import Lanch from '../lanch/lanch'
import Cart from '../cart'
import Create from '../create'
import {BrowserRouter,Route} from'react-router-dom'
import './app.scss'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Banner/>
        <div className="bodyWrapper">
          <Route path='/' component={Main} exact/>
          <Route path='/banket' component={Banket}/>
          <Route path='/dostavka' component={Dostavka}/>
          <Route path='/stol' component={Xogo}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/lanch' component={Lanch}/>
          <Route path='/cold_snack' component={ColdSnack}/>
          <Route path='/hot_snack' component={HotSnack}/>
          <Route path='/soups' component={Soup}/>
          <Route path='/salads' component={Salad}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/create' component={Create}/>
        </div>
        


        <Footer/> 
      </BrowserRouter>
        

      
    </div>
  );
}

export default App;
