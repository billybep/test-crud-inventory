import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/home'
import Item from './pages/item'
import NotFoundPage from './pages/NotFound_404_Page'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/items" render={ _ => <Item /> } />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
