import './App.css';
import { Component } from 'react';
import GameForm from '../src/Components/gameForm';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/">
                <GameForm />
              </Route>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;