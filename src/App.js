import { Redirect, Route, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route path={'/login'} component={Login}/>
        <Route path={'/signup'} component={SignUp}/>
        <Route path={'/'} component={Home}/>
        <Redirect to='/login'/>
      </Switch>
    </div>
  );
}

export default App;
