import React from 'react'
import './style.css'
import {registerService} from '../../services/create-account-service'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  currentNavigation,
} from '../../modules/counter'
import { withNavigation } from "../../services/with-route-nav";


class CreateAccount extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputUserNamVal: '',
      inputUserEmailVal: '',
      inputUserPassVal: '',
      inputUserCPassVal: ''
    }
  }

  handleUserNInputChange = (event) => {
    this.setState({
      inputUserNamVal: event.target.value
    })
  }

  handleEmailInputChange = (event) => {
    this.setState({
      inputUserEmailVal: event.target.value
    })
  }

  handlePassInputChange = (event) => {
    this.setState({
      inputUserPassVal: event.target.value
    })
  }

  handleCPassInputChange = (event) => {
    this.setState({
      inputUserCPassVal: event.target.value
    })
  }

  tabToLogIn = () =>{
    this.props.navigate('/log-in');

  }

  tabToSubmit = () => {
    registerService({
      name: this.state.inputUserNamVal,
      email: this.state.inputUserEmailVal,
      password: this.state.inputUserPassVal,
      c_password: this.state.inputUserCPassVal,

    }, ()=>{
    this.props.currentNavigation('log-in');
    this.props.navigate('/log-in');

   })
  }

  render() {
    return <div>
    <div>
    <div className='logIn_logo_cont'>
      <div className='inner_logo_cont'>
      <img className='logo-img' src="assets/logo.png"/>
      <div className='appName'>Meals4All</div>
      </div>
    </div>
   <div className='create_loginHead'>Create Account</div>
   <div className='create_formContainer'>
     <form>
     <div className="form-group">
         <input type="text" className="create_adjBoxSpace" id="exampleFullName" aria-describedby="fullname" placeholder="Full Name" value={this.state.inputUserNamVal} onChange={this.handleUserNInputChange}/>
      </div>
       <div className="form-group">
         <input type="email" className="create_adjBoxSpace" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.inputUserEmailVal} onChange={this.handleEmailInputChange}/>
      </div>
     <div className="form-group ">
       <input type="password" className="create_adjBoxSpacePass" id="exampleInputPassword1" placeholder="Password" value={this.state.inputUserPassVal} onChange={this.handlePassInputChange}/>
     </div>
     <div className="form-group ">
       <input type="password" className="create_adjBoxSpacePass" id="exampleInputPassword2" placeholder="Confirm Password" value={this.state.inputUserCPassVal} onChange={this.handleCPassInputChange}/>
     </div>
     <button type="submit" className="create_adjSubmitBtn" onClick={(e)=> {e.preventDefault();this.tabToSubmit()}}>Submit</button>
    </form>
   </div>
   <div className='divider'></div>
   <div className='create_alredyAccTxt'>Already have an Account? <span onClick={this.tabToLogIn} style={{ color: '#FFB649' }}>Log In</span></div>
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

export default withNavigation(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount))

