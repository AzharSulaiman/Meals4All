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

 successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    localStorage.setItem('lat', lat);
    localStorage.setItem('long', long);
}

errorFunction(message) {
  console.log('Unable to Fetch Location');
}

  componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.successFunction, this.errorFunction);
  } else {
      alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
  }
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


