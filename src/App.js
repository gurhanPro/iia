import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { AboutPage } from './containers/HomePage/index.es6';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
