import PropTypes from 'prop-types';
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
  };

  render() {
    const { categoriesNames } = this.state;
    const { callback } = this.props;
    const categoriesMap = categoriesNames.map((arr, i) => (
      <div key={ i }>
        <input
          type="radio"
          id={ arr.name }
          value={ arr.id }
          name="input-radio"
          onClick={ callback }
        />
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

ListCategories.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default ListCategories;
