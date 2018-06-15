import React, { Component } from 'react';
import Product from './Product';
import './Products.css';
import Client from "./Client";

class Products extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.loadDataFromServer();
  }

  loadDataFromServer = () => {
    Client.getData((data) => (
        this.setState({ data: data })
      )
    );
  };

  render() {

    const products = this.state.data.map((product, i) => (
      <Product
        key={i}
        hoverable={product.hoverable}
        productState={product.productState}
        topText={product.topText}
        topTextHover={product.topTextHover}
        heading={product.heading}
        smallHeading={product.smallHeading}
        desc={product.desc}
        weight={product.weight}
        weightUnits={product.weightUnits}
        img={product.img}
        img2x={product.img2x}
        imgAlt={product.imgAlt}
        bottomText={product.bottomText}
        bottomTextSelected={product.bottomTextSelected}
      />
    ));
    
    return (
      <div className="Products">
        {products}
      </div>
    );
  }
}

export default Products;
