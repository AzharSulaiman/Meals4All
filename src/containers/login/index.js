import React from 'react'
import './style.css'
import {loginService} from '../../services/login-service'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  currentNavigation,
} from '../../modules/counter'

class LogIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputUserNamVal: '',
      inputUserPassVal: '',
      refreshed: false
    }
  }

  componentDidMount = () => {
  //  this.refreshOnce()
  }

  refreshOnce = () => {
    if (!this.state.refreshed) {
      this.setState({
        refreshed: true,
      })
      window.location.reload();
    }
  }

  handleUserInputChange = (event) => {
    this.setState({
      inputUserNamVal: event.target.value
    })
  }

  handlePassInputChange = (event) => {
    this.setState({
      inputUserPassVal: event.target.value
    })
  }

  sumbitLogin = () => {
    console.log('derrf')
   loginService({
    email: this.state.inputUserNamVal,
    password: this.state.inputUserPassVal
   }, ()=>{
    this.props.currentNavigation('home');
    this.props.history.push('home'); 
   })
  }

  tabToForgotPass = () => {
    this.props.history.push('forgot-password');
  }

  tabToCreateAcc = () => {
    this.props.history.push('create-account');
  }

  render() {
    return  <div>
    <div className='logIn_logo_cont'>
      <div className='inner_logo_cont'>
      <img className='logo-img' src="assets/logo.png"/>
      <div className='appName'>Meals4All</div>
      </div>
    </div>
    <div className='logIn_loginHead'>Log In</div>
    <div className='logIn_formContainer'>
      <form>
        <div className="form-group">
          <input type="email" className="logIn_adjBoxSpace" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.inputUserNamVal} onChange={this.handleUserInputChange}/>
       </div>
      <div className="form-group ">
        <input type="password" className="logIn_adjBoxSpacePass" id="exampleInputPassword1" placeholder="Password" value={this.state.inputUserPassVal} onChange={this.handlePassInputChange} />
      </div>
      
      <button className="logIn_adjSubmitBtn" onClick={(e)=> {e.preventDefault();this.sumbitLogin()}}>Submit</button>
      <div className="logIn_forgotPass" onClick={this.tabToForgotPass}>
        <p>Forgot Password?</p>
      </div>
    <div className='logIn_divider'></div>

     </form>
    </div>
    <div className='logIn_alredyAccTxt'>Don’t have an  Account? <span onClick={this.tabToCreateAcc} style={{ color: '#FFB649', cursor: 'pointer' }}>Create Account</span></div>
  </div>;
  }
}

const mapStateToProps = ({ counter }) => ({
  currentNav: counter.currentNav
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      currentNavigation,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn)



