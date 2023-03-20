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
    console.log(arrayCarrinho);
    return (
      <div>
        <h2>Carrinho</h2>
        {arrayCarrinho === null
          && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        {arrayCarrinho !== null && (
          arrayCarrinho.map((product, i) => (
            <div key={ i } data-testid="shopping-cart-product-name">
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.title}</p>
              <p>{`R$ ${product.price}`}</p>
              <p data-testid="shopping-cart-product-quantity">
                1
              </p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Carrinho;
