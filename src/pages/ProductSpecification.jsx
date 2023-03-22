import React from 'react';
import { Link } from 'react-router-dom';
import { savelocalStorage } from '../services/api';

class ProductSpecification extends React.Component {
  state = {
    isTrue: false,
    object: {},
  };

  async componentDidMount() {
    const product = JSON.parse(localStorage.getItem('product'));
    this.setState({
      isTrue: true,
      object: product,
    });
  }

  handleSubmit = () => {
    
  };

  handleClick = () => {
    const { object } = this.state;
    console.log(object);
    savelocalStorage(object);
  };

  render() {
    const { isTrue, object } = this.state;
    return (
      <div>
        { !isTrue && <h1>Carregando...</h1>}
        { isTrue && (
          <div>
            <Link to="/">Voltar</Link>
            <h1 data-testid="product-detail-name">
              { object.title }
              <span data-testid="product-detail-price">{` R$ ${object.price}`}</span>
            </h1>
            <div>
              <img
                src={ object.thumbnail }
                alt={ object.title }
                data-testid="product-detail-image"
              />
            </div>
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ this.handleClick }
            >
              Adicionar ao carrinho
            </button>
            <div id="formulario">
              <label>
                <input
                  data-testid="product-detail-email"
                  type="email"
                  placeholder="email"
                  required
                />
              </label>
              <label htmlFor="nota1">
                <input data-testid="1-rating" id="nota1" type="radio" name="nota" />
                1
              </label>
              <label htmlFor="nota2">
                <input data-testid="2-rating" type="radio" id="nota2" name="nota" />
                2
              </label>
              <label htmlFor="nota3">
                <input data-testid="3-rating" id="nota3" type="radio" name="nota" />
                3
              </label>
              <label htmlFor="nota4">
                <input data-testid="4-rating" id="nota4" type="radio" name="nota" />
                4
              </label>
              <label htmlFor="nota5">
                <input data-testid="5-rating" id="nota5" type="radio" name="nota" />
                5
              </label>
              <label>
                <input type="text" data-testid="product-detail-evaluation" />
              </label>
              <br />
              <label>
                <input
                  onClick={ this.handleSubmit }
                  type="submit"
                  data-testid="submit-review-btn"
                  value="Enviar"
                />
              </label>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductSpecification;
