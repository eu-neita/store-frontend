import { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

class App extends Component {
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
