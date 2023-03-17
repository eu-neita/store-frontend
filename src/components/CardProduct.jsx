import { Component } from 'react';
import { PropTypes } from 'prop-types';

class CardProduct extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = { };

  render() {
    const { products } = this.props;
    const mapCardsProd = products.map((arr, i) => (
      <div key={ i }>
        <p>{arr.title}</p>
      </div>));
    return (
      <div>
        { mapCardsProd }
      </div>
    );
  }
}

CardProduct.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default CardProduct;
