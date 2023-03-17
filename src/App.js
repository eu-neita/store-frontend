import { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // state = {  }
  componentDidMount() {
    getCategories();
    getProductsFromCategoryAndQuery();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
