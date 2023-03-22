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
    const result = JSON.parse(localStorage.getItem('carrinho'));
    return result;
  }

  handleClick = (product, decreaseOrIncrease) => {
    const { arrayCarrinho: arrayNewCarrinho } = this.state;
    let position = 0;
    if (decreaseOrIncrease === '-') {
      product.quanty = Number(product.quanty) <= 1 ? 1 : Number(product.quanty) - 1;
      const objectFilter = arrayNewCarrinho.find((elemento, index) => {
        position = index;
        return elemento.title === product.title;
      });
      arrayNewCarrinho[position].quanty = product.quanty;
      objectFilter.quanty = product.quanty;
      localStorage.setItem('carrinho', JSON.stringify(arrayNewCarrinho));
      this.setState({
        arrayCarrinho: arrayNewCarrinho,
      });
      return;
    }
    if (arrayNewCarrinho[position].available_quantity > product.quanty) {
      product.quanty = Number(product.quanty) + 1;
      const objectFilter = arrayNewCarrinho.find((elemento, index) => {
        position = index;
        return elemento.title === product.title;
      });
      arrayNewCarrinho[position].quanty = product.quanty;
      objectFilter.quanty = product.quanty;
      localStorage.setItem('carrinho', JSON.stringify(arrayNewCarrinho));
      return this.setState({
        arrayCarrinho: arrayNewCarrinho,
      });
    }
  };

  handleRemove = (product) => {
    const storedArray = JSON.parse(localStorage.getItem('carrinho'));
    const newArray = storedArray.filter((prod) => prod.title !== product.title);
    this.setState({
      arrayCarrinho: newArray.length === 0 ? null : newArray,
    });
    localStorage.setItem('carrinho', JSON.stringify(newArray));
  };

  render() {
    const { arrayCarrinho } = this.state;
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
              <button
                onClick={ () => this.handleClick(product, '-') }
                data-testid="product-decrease-quantity"
                type="button"
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">
                { product.quanty }
              </p>
              <button
                onClick={ () => this.handleClick(product, '+') }
                data-testid="product-increase-quantity"
                type="button"
              >
                +
              </button>
              <button
                type="button"
                onClick={ () => this.handleRemove(product) }
                data-testid="remove-product"
              >
                remover
              </button>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default Carrinho;
