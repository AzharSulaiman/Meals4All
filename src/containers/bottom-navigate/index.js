import React from 'react'
import './style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  currentNavigation,
} from '../../modules/counter'

import { Link } from 'react-router-dom'

class BottomNavigation extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount =() =>{
        console.log('location', window.location.pathname.split('/')[1])
        this.props.currentNavigation(window.location.pathname.split('/')[1]);
    }

    render() {
      return this.props.currentNav != 'log-in' && this.props.currentNav != 'create-account' ?  <div className='container'>
      <div className="row">
          <Link onClick={()=>this.props.currentNavigation('home')} className="col linkDec" to="/home">
              <img src={(this.props.currentNav == 'home' || this.props.currentNav == '/') ? "assets/home-active.png" : "assets/home.png"} alt="home-icon"/>
              <div className={(this.props.currentNav == 'home' || this.props.currentNav == '/') ? "iconLabel-active" : "iconLabel"} >Home</div>
          </Link>
          <Link onClick={()=>this.props.currentNavigation('requests')} className="col linkDec" to="/requests">
          <img src={this.props.currentNav == 'requests' ? "assets/requests-active.png" : "assets/requests.png"} alt="request-icon"/>
              <div className={(this.props.currentNav == 'requests' || this.props.currentNav == '/') ? "iconLabel-active" : "iconLabel"}>Requests</div>
          </Link>
          <Link onClick={()=>this.props.currentNavigation('donate')} className="col linkDec" to="/donate">
          <img src={this.props.currentNav == 'donate' ? "assets/donate-active.png" : "assets/donate.png"} alt="donate-icon"/>
              <div className={(this.props.currentNav == 'donate' || this.props.currentNav == '/') ? "iconLabel-active" : "iconLabel"}>Donate</div>
          </Link>
          <Link onClick={()=>this.props.currentNavigation('account')} className="col linkDec" to="/account">
          <img src={this.props.currentNav == 'account' ? "assets/account-active.png" : "assets/account.png"} alt="account-icon"/>
              <div className={(this.props.currentNav == 'account' || this.props.currentNav == '/') ? "iconLabel-active" : "iconLabel"}>Account</div>
          </Link>
         
      </div>
    </div> : ''
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
  )(BottomNavigation)

