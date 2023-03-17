import { Component } from 'react';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // state = {  }
  render() {
    return (
      <div>
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
