import React from 'react'
import './style.css'

class Account extends React.Component {
  constructor(props){
    super(props)
  }

  logOut = () =>{
    this.props.history.push('log-in')
  }

  render() {
    return <div>
    <div className='accountHead'>Account</div>
    <div className='accntContainer'>
        <div className='titlCont'>
          <div className='uNameEml'>User Name</div>
        </div>
        <div className='titlCont'>
          <div className='eMail'>abc@xyz.com</div>
        </div>
        <div className='titlCont'>
          <div className='address'>Address</div>
        </div>
        <div className='titlCont'>
          <div onClick={this.logOut} className='logOut'>Log Out</div>
        </div>
    </div>
    </div>
  }
}

export default Account
