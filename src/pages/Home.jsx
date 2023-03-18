import { Component } from 'react';
import CardProduct from '../components/CardProduct';
import ListCategories from '../components/ListCategories';
import Search from '../components/SearchBar';
import { getProductById } from '../services/api';

class Home extends Component {
  state = {
    arrProducts: [],
    radioClick: false,
  };

  handleClick = async ({ target }) => {
    const results = await getProductById(target.value);
    this.setState({
      arrProducts: results,
      radioClick: true,
    });
  };

  render() {
    const { radioClick, arrProducts } = this.state;
    return (
      <div>
        <ListCategories callback={ this.handleClick } />
        <Search />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        { radioClick && <CardProduct products={ arrProducts } />}
      </div>
    );
  }
}

export default Home;
