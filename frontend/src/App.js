import './App.css';
import GameForm from '../src/Components/GameForm/gameForm';
import GameSheet from '../src/Components/GameSheet/gameSheet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
      <div className="App">
          <Router>
            <Routes>
              <Route exact path="/">  
                <GameForm />
              </Route>
              <Route exact path="/gameSheet">  
                <GameSheet />
              </Route>
            </Routes>
          </Router>
      </div>
    );
}

export default App;