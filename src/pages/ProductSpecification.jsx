import React from 'react';
import { Link } from 'react-router-dom';
import { savelocalStorage } from '../services/api';

class ProductSpecification extends React.Component {
  state = {
    isTrue: false,
    object: {},
    email: '',
    text: '',
    radioValue: 0,
    emailValidate: false,
    comments: [],
  };

  async componentDidMount() {
    const product = JSON.parse(localStorage.getItem('product'));
    this.storage(product);
    this.setState({
      isTrue: true,
      object: product,
    });
  }

  storage = (product) => {
    const getStorage = JSON.parse(localStorage.getItem(product.id));
    if (getStorage === null) {
      localStorage.setItem(product.id, JSON.stringify([]));
    } else {
      this.setState({
        comments: getStorage,
      });
    }
  };

  textHandleInputs = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    const { object, email, text, radioValue } = this.state;
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const MIN_RADIO_VALUE = 0;
    if (email.match(mailformat) && MIN_RADIO_VALUE < radioValue) {
      const objectSaveLocal = {
        email,
        text,
        rating: radioValue,
      };
      const getStorage = JSON.parse(localStorage.getItem(object.id));
      const array = [...getStorage, objectSaveLocal];
      localStorage.setItem(object.id, JSON.stringify(array));
      return this.setState({
        emailValidate: false,
        comments: array,
        email: '',
        text: '',
        radioValue: 0,
      });
    }
    this.setState({ emailValidate: true });
  };

  handleClick = () => {
    const { object } = this.state;
    object.quanty = 1;
    savelocalStorage(object);
  };

  render() {
    const { isTrue, object, email, text, emailValidate, comments } = this.state;
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
                  name="email"
                  data-testid="product-detail-email"
                  type="email"
                  value={ email }
                  placeholder="email"
                  onChange={ this.textHandleInputs }
                />
              </label>
              <label htmlFor="nota1">
                <input
                  data-testid="1-rating"
                  value={ 1 }
                  id="nota1"
                  type="radio"
                  name="radioValue"
                  onChange={ this.textHandleInputs }
                />
                1
              </label>
              <label htmlFor="nota2">
                <input
                  data-testid="2-rating"
                  value={ 2 }
                  type="radio"
                  id="nota2"
                  name="radioValue"
                  onChange={ this.textHandleInputs }
                />
                2
              </label>
              <label htmlFor="nota3">
                <input
                  data-testid="3-rating"
                  value={ 3 }
                  id="nota3"
                  type="radio"
                  name="radioValue"
                  onChange={ this.textHandleInputs }
                />
                3
              </label>
              <label htmlFor="nota4">
                <input
                  data-testid="4-rating"
                  value={ 4 }
                  id="nota4"
                  type="radio"
                  name="radioValue"
                  onChange={ this.textHandleInputs }
                />
                4
              </label>
              <label htmlFor="nota5">
                <input
                  data-testid="5-rating"
                  value={ 5 }
                  id="nota5"
                  type="radio"
                  name="radioValue"
                  onChange={ this.textHandleInputs }
                />
                5
              </label>
              <label>
                <input
                  type="text"
                  name="text"
                  value={ text }
                  onChange={ this.textHandleInputs }
                  data-testid="product-detail-evaluation"
                />
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
              {emailValidate && <p data-testid="error-msg">Campos inválidos</p>}
            </div>
            {comments.map((comment, index) => (
              <div key={ index }>
                <p data-testid="review-card-email">{comment.email}</p>
                <span data-testid="review-card-rating">{comment.rating}</span>
                <p data-testid="review-card-evaluation">{comment.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ProductSpecification;
