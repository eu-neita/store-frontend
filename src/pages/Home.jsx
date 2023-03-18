import { Component } from 'react';
import CardProduct from '../components/CardProduct';
import ListCategories from '../components/ListCategories';
import Search from '../components/SearchBar';
import { getProductById } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      array: [],
      isTrue: false,
    };
  }

  handleClick = async ({ target }) => {
    const results = await getProductById(target.value);
    this.setState({
      array: results,
      isTrue: true,
    });
  };

  render() {
    const { isTrue, array } = this.state;
    return (
      <div>
        <ListCategories callback={ this.handleClick } />
        <Search />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        { isTrue && <CardProduct products={ array } />}
      </div>
    );
  }
}

export default Home;
