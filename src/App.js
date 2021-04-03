import './App.css';
import { Route, Switch } from "react-router-dom";
import Main from './components/home/Main'
import Admin from './components/admin/AdminMain'
import Welcome from './components/home/Welcome'
import Login from './components/admin/AdminLogin'
import Register from './components/admin/AdminRegister'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/admin" >
          <Admin />
        </Route>
        <Route path="/home">
          <Main />
        </Route>
        <Route exact path="/login" >
          <Login />
        </Route>
        <Route exact path="/register" >
          <Register />
        </Route>
        <Route exact path="/" >
          <Welcome />
        </Route>



      </Switch>
    </div>
  );
}

export default App;
