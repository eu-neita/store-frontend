import { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Carrinho from './pages/Carrinho';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/carrinho" component={ Carrinho } />
          <Route path="*" component={ NotFound } />
        </Switch>
        <Link to="/carrinho" data-testid="shopping-cart-button"> Carrinho </Link>
      </div>
    );
  }
}

export default App;
