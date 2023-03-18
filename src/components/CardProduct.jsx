import { Component } from 'react';
import { PropTypes } from 'prop-types';

class CardProduct extends Component {
  render() {
    const { products } = this.props;
    const mapCardsProd = products.map((arr, i) => (
      <div key={ i } data-testid="product">
        <img src={ arr.thumbnail } alt={ arr.title } />
        <p>{arr.title}</p>
        <p>{ `R$ ${arr.price}` }</p>
      </div>));
    return (
      <div>
        { products.length === 0 ? <p>Nenhum produto foi encontrado</p> : mapCardsProd}
      </div>
    );
  }
}

CardProduct.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default CardProduct;
