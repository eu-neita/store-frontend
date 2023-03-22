import { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { callback } = this.props;
    return (
      <div>
        <ListCategories callback={ this.handleClick } />
        <Search />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        { radioClick && <CardProduct products={ arrProducts } callback={ callback } />}
      </div>
    );
  }
}

Home.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default Home;
