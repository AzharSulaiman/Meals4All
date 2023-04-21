import React from 'react'
import { Route, Routes, BrowserRouter, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../home'
import Request from '../request'
import Donate from '../donate'
import LogIn from '../login'
import CreateAccount from '../create-account'
import BottomNavigation  from '../bottom-navigate';
import ForgotPassword from '../fotgot-password';
import Account from '../account';
import DetailScreen from '../detail-screen';


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
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<LogIn />} />
      <Route exact path="/log-in" element={<LogIn/>} />
      <Route exact path="/requests" element={<Request/>} />
      <Route exact path="/donate" element={<Donate/>} />
      <Route exact path="/create-account" element={<CreateAccount/>} />
      <Route exact path="/forgot-password" element={<ForgotPassword/>} />
      <Route exact path="/account" element={<Account/>} />
      <Route exact path="/detail-screen" element={<DetailScreen/>} />
    </Routes>
    <div className='bottonContainer'>
        <BottomNavigation/>
     </div>
</BrowserRouter>
  }
}



export default App


