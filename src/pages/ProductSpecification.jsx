import React from 'react';
import { Link } from 'react-router-dom';
import { savelocalStorage } from '../services/api';

class ProductSpecification extends React.Component {
  constructor() {
    super();

    this.state = {
      isTrue: false,
      object: {},
    };
  }

  async componentDidMount() {
    const product = JSON.parse(localStorage.getItem('product'));
    this.setState({
      isTrue: true,
      object: product,
    });
  }

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
          </div>
        )}
      </div>
    );
  }
}

export default ProductSpecification;
