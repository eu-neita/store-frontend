import { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Carrinho from './pages/Carrinho';
import ProductSpecification from './pages/ProductSpecification';
import Checkout from './components/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/carrinho" data-testid="shopping-cart-button"> Carrinho </Link>
        <Switch>
          <Route exact path="/" component={ Home } />
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
