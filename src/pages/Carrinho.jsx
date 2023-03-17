import React from 'react';

class Carrinho extends React.Component {
  render() {
    return (
      <div>
        <h2>Carrinho</h2>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default Carrinho;
