import React from 'react';
import PropTypes from 'prop-types';

class Checkout extends React.Component {
  state = {
    radio: 0,
    isTrue: false,
    email: '',
    nome: '',
    cpf: '',
    telefone: '',
    cep: '',
    endereco: '',
    arrayStorage: [],
  };

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('carrinho'));
    this.setState({
      arrayStorage: storage,
    });
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { radio, nome, email, cpf, telefone, cep, endereco } = this.state;
    const array = [
      nome.length,
      email.length,
      cpf.length,
      telefone.length,
      cep.length,
      endereco.length,
    ];
    const { history } = this.props;
    const validation = array.every((element) => element > 1);
    if (radio > 0 && validation) {
      this.setState({
        isTrue: false,
      });
      history.push('/');
      localStorage.clear();
      return;
    }
    this.setState({
      isTrue: true,
    });
  };

  render() {
    const {
      isTrue,
      email,
      nome,
      cpf,
      telefone,
      cep,
      endereco,
      arrayStorage,
    } = this.state;
    return (
      <div>
        {(
          arrayStorage.map((product, index) => (
            <p key={ index }>{product.title}</p>
          ))
        )}
        <form>
          <label htmlFor="name">
            Nome completo
            <input
              data-testid="checkout-fullname"
              type="text"
              name="nome"
              onChange={ this.handleChange }
              value={ nome }
              id="name"
            />
          </label>
          <label htmlFor="e-mail">
            Email
            <input
              data-testid="checkout-email"
              type="email"
              value={ email }
              onChange={ this.handleChange }
              name="email"
              id="e-mail"
            />
          </label>
          <label htmlFor="CPF">
            CPF
            <input
              data-testid="checkout-cpf"
              type="text"
              value={ cpf }
              onChange={ this.handleChange }
              name="cpf"
              id="CPF"
            />
          </label>
          <label htmlFor="phone">
            Telefone
            <input
              data-testid="checkout-phone"
              type="text"
              value={ telefone }
              onChange={ this.handleChange }
              name="telefone"
              id="phone"
            />
          </label>
          <label htmlFor="CEP">
            CEP
            <input
              data-testid="checkout-cep"
              type="text"
              onChange={ this.handleChange }
              value={ cep }
              name="cep"
              id="CEP"
            />
          </label>
          <label htmlFor="address">
            Endereço
            <input
              data-testid="checkout-address"
              type="text"
              onChange={ this.handleChange }
              name="endereco"
              value={ endereco }
              id="address"
            />
            <p>Método de pagamento</p>
            <label htmlFor="radio-1">
              Boleto
            </label>
            <input
              type="radio"
              name="radio"
              value={ 1 }
              data-testid="ticket-payment"
              onChange={ this.handleChange }
              id="radio-1"
            />
            <label htmlFor="radio-2">
              Visa
            </label>
            <input
              type="radio"
              name="radio"
              value={ 2 }
              data-testid="visa-payment"
              onChange={ this.handleChange }
              id="radio-2"
            />
            <label htmlFor="radio-3">
              MasterCard
            </label>
            <input
              type="radio"
              name="radio"
              value={ 3 }
              data-testid="master-payment"
              onChange={ this.handleChange }
              id="radio-3"
            />
            <label htmlFor="radio-4">
              Elo
            </label>
            <input
              type="radio"
              name="radio"
              value={ 4 }
              data-testid="elo-payment"
              onChange={ this.handleChange }
              id="radio-4"
            />
          </label>
          <button
            type="button"
            data-testid="checkout-btn"
            onClick={ this.handleClick }
          >
            Finalizar Compra

          </button>
        </form>
        { isTrue && <p data-testid="error-msg">Campos inválidos</p>}
      </div>
    );
  }
}

Checkout.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Checkout;
