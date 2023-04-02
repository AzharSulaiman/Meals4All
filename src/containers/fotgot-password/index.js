import React from 'react'
import './style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  currentNavigation,
} from '../../modules/counter'

class ForgotPassword extends React.Component {
  constructor(props){
    super(props)
  }

  resetPassword = () =>{
    this.props.history.push('log-in')
  }
  
  render() {
    return <div>
      <div className='logIn_logo_cont'>
      <div className='inner_logo_cont'>
      <img className='logo-img' src="assets/logo.png"/>
      <div className='appName'>Meals4All</div>
      </div>
    </div>
    <div className='logIn_loginHead'>Forgot Password</div>
    <div className='instText'>Enter your email address and we will send you reset instruction</div>
    <div className='formContainer'>
      <form>
        <div className="form-group">
          <input type="email" className="adjBoxSpace" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
       </div>
      <button type="submit" className="logIn_adjSubmitBtn" onClick={this.resetPassword}>Reset Password</button>
      
     </form>
    </div>
   
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
)(ForgotPassword)