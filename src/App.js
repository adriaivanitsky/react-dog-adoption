import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dogs from './views/Dogs';
import DogInfo from './views/DogInfo';
import Admin from './views/Admin';
import EditDog from './views/EditDog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/* <h1>Its a Doggy Dog World</h1>
          <p>find your fuzzy companion today!</p> */}
          <Route exact path="/" component={Dogs} />;{/* <Route exact path="/dogs" />; */}
          <Route exact path="/dogs/:id" component={DogInfo} />;
          <Route exact path="/admin" component={Admin} />;
          <Route exact path="/dogs/:id/edit" component={EditDog} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
