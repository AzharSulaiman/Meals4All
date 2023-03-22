import React from 'react'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../home'
import Request from '../request'
import Donate from '../donate'
import LogIn from '../login'
import CreateAccount from '../create-account'
import BottomNavigation  from '../bottom-navigate';
import ForgotPassword from '../fotgot-password';
import Account from '../account';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return   <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={LogIn} />
      <Route exact path="/log-in" component={LogIn} />
      <Route exact path="/requests" component={Request} />
      <Route exact path="/donate" component={Donate} />
      <Route exact path="/create-account" component={CreateAccount} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/account" component={Account} />
    </Switch>
    <div className='bottonContainer'>
        <BottomNavigation/>
     </div>
</BrowserRouter>
  }
}



export default App


