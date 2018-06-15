import React, { Component } from 'react';
import './ProductBottomText.css';

class ProductBottomText extends Component {
  handleClick = () => {
    this.props.onLinkClick();
  }

  render() {
    if (this.props.productState === 'enabled') {
      return (
        <div className="ProductBottomText">
          <div className="ProductBottomText__text">
            Чего сидишь? Порадуй котэ, <span>
              <i onClick={this.handleClick}>купи</i>.
            </span>
          </div>
        </div>
      );
    } else if (this.props.productState === 'selected') {
      return (
        <div className="ProductBottomText">
          <div className="ProductBottomText__text">{this.props.bottomTextSelected}</div>
        </div>
      );
    } else {
      return (
        <div className="ProductBottomText">
          <div className="ProductBottomText__text">Печалька, {this.props.smallHeading} закончился</div>
        </div>
      );
    }
    
  }
}

export default ProductBottomText;
