import './App.css';
import { Component } from 'react';
import GameForm from '../src/Components/gameForm';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <GameForm />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;