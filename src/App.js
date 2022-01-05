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
          {/* <NavLink to="/dogs">dogs</NavLink> */}
        </header>
        <Switch>
          {/* <h1>Its a Doggy Dog World</h1>
          <p>find your fuzzy companion today!</p> */}
          <Route exact path="/" component={Dogs} />;{/* <Route exact path="/dogs" />; */}
          <Route exact path="/dogs/:id" component={DogInfo} />;
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
