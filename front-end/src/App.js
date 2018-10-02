import React, { Component } from 'react';
import './App.css';
import Layout from './component/layout/layout'
import Home from './container/home/home'
import Products from './container/products/products'
import Contactus from './container/contactus/contactus'
import ProductDetail from './component/productDetail/productDetail' 
import Feedback from './container/feedback/feedback'
import AboutUs from './container/aboutus/aboutus'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="container-fluid" style={{width:'80%',margin:'auto' }}>
        <Layout >
          <Route path="/home" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/productDetail/:id" exact component={ProductDetail} />
          <Route path="/contactus" exact component={Contactus} />
          <Route path="/feedback" exact component={Feedback} />
          <Route path="/aboutus" exact component={AboutUs} />

        </Layout>
      </div>
    );
  }
}

export default App;
