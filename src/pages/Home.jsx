import { Component } from 'react';
import ListCategories from '../components/ListCategories';
import Search from '../components/SearchBar';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // state = {  }
  render() {
    return (
      <div>
        <ListCategories />
        <Search />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
