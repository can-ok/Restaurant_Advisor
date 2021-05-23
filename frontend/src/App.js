import './App.scss';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';

import HomePage from './Pages/HomePage'
import Suggestion from './Pages/SuggestionPage';
import About from './Pages/AboutPage';
import Navbar from './Components/Navbar';
import RestaurantPanel from './Pages/RestaurantPanel';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="sidebar">
          <Navbar/>

        </div>
        <div className="main-content">
          <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} /> 
            <Route exact path="/suggestion" component={Suggestion} /> 
            <Route exact path="/about" component={About} />
            <Route exact path="/admin/restaurant" component={RestaurantPanel} />

          </Switch>
        </div>
      </div>
      </Router>
    </div>
  );
}

export default App;
