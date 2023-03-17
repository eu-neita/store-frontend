import React from 'react';
import { getProducts } from '../services/api';
import CardProduct from './CardProduct';

class SearchBar extends React.Component {
  state = {
    searchValue: '',
  };

  // componentDidMount() {
  //   this.searchProductFetch();
  // }

  handleSeachValue = ({ target }) => {
    const { value } = target;
    this.setState({
      searchValue: value,
      productResults: [],
      find: false,
    });
  };

  searchProductFetch = async () => {
    const { searchValue } = this.state;
    const product = await getProducts(searchValue);
    this.setState({
      productResults: product.results,
      find: true,
    });
    console.log(product.results);
  };

  render() {
    const { searchValue, productResults, find } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          value={ searchValue }
          onChange={ this.handleSeachValue }
          name="searchValue"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.searchProductFetch }
        >
          Buscar
        </button>
        {find && <CardProduct products={ productResults } />}
      </div>
    );
  }
}

export default SearchBar;
