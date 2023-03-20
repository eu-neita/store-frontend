import React from 'react';

class Carrinho extends React.Component {
  state = {
    arrayCarrinho: [],
  };

  componentDidMount() {
    const resultsCart = this.getLocalCart();
    this.setState({
      arrayCarrinho: resultsCart,
    });
  }

  getLocalCart() {
    const storedArray = localStorage.getItem('cart');
    const result = JSON.parse(storedArray);
    return result;
  }

  render() {
    const { arrayCarrinho } = this.state;
    const mapCart = arrayCarrinho.map((product, i) => (
      <div key={ i } data-testid="shopping-cart-product-name">
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{product.title}</p>
        <p>{`R$ ${product.price}`}</p>
        <p data-testid="shopping-cart-product-quantity">
          1
        </p>
      </div>
    ));
    return (
      <div>
        <h2>Carrinho</h2>
        {arrayCarrinho === [] ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : mapCart}
      </div>
    );
  }
}

export default Carrinho;
