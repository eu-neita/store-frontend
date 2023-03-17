import { Component } from 'react';
import { getCategories } from '../services/api';

class ListCategories extends Component {
  state = {
    categoriesNames: [],
  };

  componentDidMount() {
    this.getCatecories();
  }

  getCatecories = async () => {
    const arrayObgCat = await getCategories();
    this.setState({
      categoriesNames: arrayObgCat,
    });
    console.log(arrayObgCat);
  };

  render() {
    const { categoriesNames } = this.state;
    const categoriesMap = categoriesNames.map((arr, i) => (
      <div key={ i }>
        <input type="radio" name={ arr.name } id={ arr.name } />
        <label data-testid="category" htmlFor={ arr.name }>{arr.name}</label>
      </div>
    ));
    return (
      <div>
        { categoriesMap }
      </div>
    );
  }
}

export default ListCategories;
