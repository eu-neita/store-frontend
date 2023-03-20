import React from 'react';

class Carrinho extends React.Component {
  state = {
    arrayCarrinho: [],
    teste: 1,
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

  handleClick = ({ target }, product) => {
    if (target.innerText === '-') {
      product.quanty = product.quanty <= 1 ? 1 : Number(product.quanty) - 1;
      const func = this.getLocalCart();
      const filtro = func.filter((elemento) => elemento.title === product.title);
      const filtro1 = func.filter((elemento) => elemento.title !== product.title);
      // console.log(filtro);
      // console.log(filtro1);
      filtro[0].quanty = product.quanty;
      localStorage.setItem('carrinho', JSON.stringify([...filtro, ...filtro1]));
      this.setState({
        teste: product.quanty,
      });
      return;
    }
    product.quanty = Number(product.quanty) + 1;
    const func = this.getLocalCart();
    const filtro = func.filter((elemento) => elemento.title === product.title);
    const filtro1 = func.filter((elemento) => elemento.title !== product.title);
    filtro[0].quanty = product.quanty;
    localStorage.setItem('carrinho', JSON.stringify([...filtro, ...filtro1]));
    this.setState({
      teste: product.quanty,
    });
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
    const { arrayCarrinho, teste } = this.state;
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
                onClick={ (event) => this.handleClick(event, product) }
                data-testid="product-decrease-quantity"
                type="button"
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">
                { product.quanty || teste }
              </p>
              <button
                onClick={ (event) => this.handleClick(event, product) }
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
