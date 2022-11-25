import './App.css';
import GameForm from '../src/Components/GameForm/gameForm';
import GameSheet from '../src/Components/GameSheet/gameSheet';
import GameTable from './Components/GameTable/gameTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
      <div className="App">
          <Router>
            <Routes>
              <Route exact path="/" element={<GameForm />}></Route>
              <Route exact path="/gameSheet" element={<GameSheet />}></Route>
              <Route exact path="/gameTable" element={<GameTable />}></Route>
            </Routes>
          </Router>
      </div>
    );
}

export default App;