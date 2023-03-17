import { React, Component } from 'react';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

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
    return (<div>Hello World!</div>);
  }
}

export default App;
