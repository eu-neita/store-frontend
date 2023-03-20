import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class CardProduct extends Component {
  handleClick = (arr) => {
    window.location.pathname = '/especificacao';
    localStorage.setItem('product', JSON.stringify(arr));
  };

  render() {
    const { products } = this.props;
    const mapCardsProd = products.map((arr, i) => (
      <div key={ i } data-testid="product">
        <Link
          to="/especificacao"
          data-testid="product-detail-link"
          onClick={ () => this.handleClick(arr) }
        >
          Detalhes
        </Link>
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
