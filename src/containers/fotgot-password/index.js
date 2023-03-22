import React from 'react'
import './style.css'

class ForgotPassword extends React.Component {
  constructor(props){
    super(props)
  }

  resetPassword = () =>{
    this.props.history.push('log-in')
  }
  
  render() {
    return <div>
    <div className='loginHead'>Forgot Password</div>
    <div className='instText'>Enter your email address and we will send you reset instruction</div>
    <div className='formContainer'>
      <form>
        <div className="form-group">
          <input type="email" className="adjBoxSpace" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
       </div>
      <button type="submit" className="adjSubmitBtn" onClick={this.resetPassword}>Reset Password</button>
      
     </form>
    </div>
   
  </div>;
  }
}



export default ForgotPassword
