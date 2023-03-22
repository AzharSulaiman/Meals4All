import React from 'react'
import './style.css'

const CreateAccount = () => (
  <div>
     <div>
    <div className='loginHead'>Create Account</div>
    <div className='formContainer'>
      <form>
      <div className="form-group">
          <input type="text" className="adjBoxSpace" id="exampleFullName" aria-describedby="fullname" placeholder="Full Name"/>
       </div>
        <div className="form-group">
          <input type="email" className="adjBoxSpace" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
       </div>
      <div className="form-group ">
        <input type="password" className="adjBoxSpacePass" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <button type="submit" className="adjSubmitBtn">Submit</button>
     </form>
    </div>
    <div className='divider'></div>
    <div className='alredyAccTxt'>Already have an Account? <span style={{ color: '#FFB649' }}>Log In</span></div>
  </div>
  </div>
)

export default CreateAccount
