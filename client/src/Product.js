import React, { Component } from 'react';
import ProductCard from './ProductCard';
import ProductBottomText from './ProductBottomText';
import './Product.css';

class Product extends Component {
  state = {
    hoverable: this.props.hoverable,
    productState: this.props.productState
  };

  onCardClick = () => {
    this.toggleState();
  }

  onLinkClick = () => {
    this.toggleState();
    this.setHoverable();
  }

  toggleState = () => {
    const productState = this.state.productState;
    if (productState === 'disabled') return;
    this.setState({
      productState: productState === 'enabled' ? 'selected' : 'enabled',
      hoverable: false
    });
  }

  setHoverable = () => {
    this.setState({hoverable: true});
  }

  onMouseLeave = () => {
    const hoverable = this.state.hoverable;
    if (hoverable === true) return;
    this.setState({ hoverable: true});
  }

  render() {
    return (
      <article className={this.state.hoverable ? "Product hoverable" : "Product"} state={this.state.productState}>
        <ProductCard
          topText={this.props.topText}
          topTextHover={this.props.topTextHover}
          heading={this.props.heading}
          smallHeading={this.props.smallHeading}
          desc={this.props.desc}
          weight={this.props.weight}
          weightUnits={this.props.weightUnits}
          img={this.props.img}
          img2x={this.props.img2x}
          imgAlt={this.props.imgAlt}
          onCardClick={this.onCardClick}
          onMouseLeave={this.onMouseLeave}
        />
        <ProductBottomText
          productState={this.state.productState}
          bottomTextSelected={this.props.bottomTextSelected}
          smallHeading={this.props.smallHeading}
          onLinkClick={this.onLinkClick}
        />
        <svg className="Product__bgr" width="320" height="480">
          <use xlinkHref="#productbg"></use>
        </svg>
      </article>
    );
  }
}

export default Product;
