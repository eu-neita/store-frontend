import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

class CardProduct extends Component {
  state = {
    arrayCarrinho: [],
  };

  componentDidUpdate() {
    const { arrayCarrinho } = this.state;
    localStorage.setItem('carrinho', JSON.stringify(arrayCarrinho));
  }

  clickFunction = (arr) => {
    if (!arr.quanty) {
      arr.quanty = 1;
    } else {
      arr.quanty = Number(arr.quanty) + 1;
    }
    console.log(arr.quanty);
    this.setState((prev) => ({
      arrayCarrinho: [...prev.arrayCarrinho, arr],
    }));
  };

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
        {arr.shipping.free_shipping && (
          <p data-testid="free-shipping">Frete Grátis</p>
        )}
        <img src={ arr.thumbnail } alt={ arr.title } />
        <p>{arr.title}</p>
        <p>{ `R$ ${arr.price}` }</p>
        <button
          data-testid="product-add-to-cart"
          onClick={ () => this.clickFunction(arr) }
        >
          adicionar ao carrinho
        </button>
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
