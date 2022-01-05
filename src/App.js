import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Dogs from './views/Dogs';
import DogInfo from './views/DogInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavLink to="/">home</NavLink>
          <NavLink to="/dogs">dogs</NavLink>
        </header>
        <Switch>
          <Route exact path="/" />;
          <Route exact path="/dogs" component={Dogs} />;
          <Route exact path="dogInfo" component={DogInfo} />;
        </Switch>
        <h1>Its a Doggy Dog World</h1>
        <p>find your fuzzy companion today!</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
