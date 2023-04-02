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
          <div className='acctHead'>User Name:</div>
          <div className='accDetail'>Jhon Wick</div>
        </div>
        <div className='titlCont'>
          <div className='acctHead'>Email:</div>
          <div className='accDetail'>abc@xyz.com</div>
        </div>
        <div className='titlCont'>
          <div className='acctHead'>Address</div>
          <div className='accDetail'>Address</div>
        </div>
        <div className='titlCont'>
          <div onClick={this.logOut} className='logOut'>Log Out</div>
        </div>
    </div>
    </div>
  }
}

export default Account
