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
  }

  sumbitLogin = () => {
    this.props.history.push('home')
    this.props.currentNavigation(window.location.pathname.split('/')[1]);
  //  loginService({}, ()=>{
  //   this.props.history.push('create-account')
  //  })
  }

  tabToForgotPass = () => {
    this.props.history.push('forgot-password');
  }

  tabToCreateAcc = () => {
    this.props.history.push('create-account');
  }

  render() {
    return  <div>
    <div className='loginHead'>Log In</div>
    <div className='formContainer'>
      <form>
        <div className="form-group">
          <input type="email" className="adjBoxSpace" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
       </div>
      <div className="form-group ">
        <input type="password" className="adjBoxSpacePass" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      
      <button type="submit" className="adjSubmitBtn" onClick={this.sumbitLogin}>Submit</button>
      <div className="forgotPass" onClick={this.tabToForgotPass}>
        <p>Forgot Password?</p>
      </div>
     </form>
    </div>
    <div className='divider'></div>
    <div className='alredyAccTxt'>Don’t have an  Account? <span onClick={this.tabToCreateAcc} style={{ color: '#FFB649', cursor: 'pointer' }}>Create Account</span></div>
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



