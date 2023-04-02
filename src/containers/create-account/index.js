import React from 'react'
import './style.css'
import {registerService} from '../../services/create-account-service'

class CreateAccount extends React.Component {
  constructor(props){
    super(props)
  }

  tabToLogIn = () =>{
    this.props.history.push('log-in')
  }

  tabToSubmit = () => {
    // this.props.history.push('log-in')
    registerService({}, ()=>{
    this.props.history.push('log-in')
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
         <input type="text" className="create_adjBoxSpace" id="exampleFullName" aria-describedby="fullname" placeholder="Full Name"/>
      </div>
       <div className="form-group">
         <input type="email" className="create_adjBoxSpace" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>
     <div className="form-group ">
       <input type="password" className="create_adjBoxSpacePass" id="exampleInputPassword1" placeholder="Password"/>
     </div>
     <button type="submit" className="create_adjSubmitBtn" onClick={this.tabToSubmit}>Submit</button>
    </form>
   </div>
   <div className='divider'></div>
   <div className='create_alredyAccTxt'>Already have an Account? <span onClick={this.tabToLogIn} style={{ color: '#FFB649' }}>Log In</span></div>
 </div>
 </div>;
  }
}

export default CreateAccount
