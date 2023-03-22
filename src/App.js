import { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Carrinho from './pages/Carrinho';
import ProductSpecification from './pages/ProductSpecification';
import Checkout from './components/Checkout';

class App extends Component {
  state = {
    quanty: 0,
  };

  componentDidMount() {
    this.handleChange();
  }

  handleChange = () => {
    const storage = JSON.parse(localStorage.getItem('carrinho'));
    const value = storage === null ? 0 : storage.length;
    this.setState({
      quanty: value,
    });
  };

  render() {
    const { quanty } = this.state;
    // const storage = JSON.parse(localStorage.getItem('carrinho'));
    // console.log(storage.length);
    return (
      <div>
        <Link to="/carrinho" data-testid="shopping-cart-button">
          Carrinho
        </Link>
        <span data-testid="shopping-cart-size">{ quanty }</span>
        <Switch>
          <Route exact path="/">
            <Home callback={ this.handleChange } />
          </Route>
          <Route exact path="/carrinho" component={ Carrinho } />
          <Route exact path="/especificacao" component={ ProductSpecification } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
