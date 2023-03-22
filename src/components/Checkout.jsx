import React from 'react';

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
    buttonCheck: true,
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    const { email } = this.state;
    console.log(email);
  };

  handleClick = () => {
    const { radio } = this.state;
    if (radio < 1) {
      this.setState({
        isTrue: true,
      });
      return;
    }
    this.setState({
      isTrue: false,
    });
  };

  render() {
    const storage = JSON.parse(localStorage.getItem('carrinho'));
    const { isTrue, email, nome, cpf, telefone, cep, endereco, buttonCheck } = this.state;
    return (
      <div>
        {(
          storage.map((product, index) => (
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
              onChange={ this.handleChange }
              id="radio-4"
            />
          </label>
          <button
            type="button"
            data-testid="checkout-btn"
            onClick={ this.handleClick }
            disabled={ buttonCheck }
          >
            Finalizar Compra

          </button>
        </form>
        { isTrue && <p data-testid="error-msg">Campos inválidos</p>}
      </div>
    );
  }
}

export default Checkout;
