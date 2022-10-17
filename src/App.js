import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { AboutPage } from './containers/AboutPage/index.es6';
import { HomePage } from './containers/HomePage2/index.es6';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
