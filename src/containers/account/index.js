import React from 'react'
import './style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  currentNavigation,
} from '../../modules/counter'
import { withNavigation } from "../../services/with-route-nav";


class Account extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email')

    }
  }

  logOut = () =>{
    this.props.currentNavigation('log-in');
    this.props.navigate('/log-in');

  }

  render() {
    return <div>
    <div className='accountHead'>Account</div>
    <div className='accntContainer'>
        <div className='titlCont'>
          <div className='acctHead'>User Name:</div>
          <div className='accDetail'>{this.state.name}</div>
        </div>
        <div className='titlCont'>
          <div className='acctHead'>Email:</div>
          <div className='accDetail'>{this.state.email}</div>
        </div>
        <div className='titlCont'>
          <div onClick={this.logOut} className='logOut'>Log Out</div>
        </div>
    </div>
    </div>
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
)(Account))
