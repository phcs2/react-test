import React, { Component } from 'react';
import './ProductCard.css';

class ProductCard extends Component {
  handleClick = () => {
    this.props.onCardClick();
  }

  handleMouseLeave = () => {
    this.props.onMouseLeave();
  }

  render() {
    const listItems = this.props.desc.map((item, i) => (
      <li key={i} className="ProductCard__desc-item" dangerouslySetInnerHTML={ {__html: item} }/>
    ));
    return (
      <div
        className="ProductCard"
        onClick={this.handleClick}
        onMouseLeave={this.handleMouseLeave}
      >
        <p className="ProductCard__top-text">{this.props.topText}</p>
        <p className="ProductCard__top-text">{this.props.topTextHover}</p>
        <h2 className="ProductCard__heading">{this.props.heading}</h2>
        <h3 className="ProductCard__small-heading">{this.props.smallHeading}</h3>
        <ul className="ProductCard__desc">
          {listItems}
        </ul>
        <div className="ProductCard__weight">
          <p className="ProductCard__weight-digits">{this.props.weight}</p>
          <p className="ProductCard__weight-units">{this.props.weightUnits}</p>
        </div>
        <img
          className="ProductCard__img"
          src={`./img/${this.props.img}`}
          srcSet={`./img/${this.props.img} 1x, ./img/${this.props.img2x} 2x`}
          alt={this.props.imgAlt}
        />
      </div>
    );
  }
}

export default ProductCard;
