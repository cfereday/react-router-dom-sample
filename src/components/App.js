// import './App.css';
import { Home } from './Home'
import { About } from './About'
import { Users } from './Users'
import {Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1> PLEASE LINK :D </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Switch>
        <Route path="/" exact> <Home/></Route>
        <Route path="/about"> <About/></Route>
        <Route path="/users"> <Users/></Route>
      </Switch>
    </div>
  );
}

export default App;
