import React from 'react'
import './style.css'
import {getRequestedDataApi, requestAcceptService, requestRejectService, requestUpdateService} from '../../services/request-service';

class Request extends React.Component {
  constructor() {
    super();
    this.state = {
      list : [],
      donation: []
    }
  }

  componentDidMount = () => {
    getRequestedDataApi((requestedData)=> {
      this.setState({
        list: requestedData.request,
        donation: requestedData.donation
      })
    })
  }

  requestAccept = (itemId) => {
    requestAcceptService({
      itemId: itemId
    }, ()=>{
    // this.props.history.push('home'); 
   })
   requestUpdateService({
    itemId: itemId
  }, ()=>{
  // this.props.history.push('home'); 
 })
  }

  requestReject = (itemId) => {
    requestRejectService({
      itemId: itemId

    }, ()=>{
    // this.props.history.push('home'); 
   })
  }

  render() {
    return <div>
    <div className='homeHead'>Requests</div>
    <div className='searchContainer'>
      <input className='searchBox' type="text" placeholder="Search" />
      <img className='search-icon' src="assets/search-icon.png" />
    </div>
    <div className='home_container'>
        {this.state.donation.map((item, index) =>  (
           <div className='home_boxContainer'><div className='home_leftContainer'>
            <img className='home_food-image' src={'http://69.48.142.41/'+item.image}/>
          </div>
          <div className='home_rightContainer'>
          <div className='home_foodTitle'>{item.title}</div>
              <div className='home_foodLocation'><span><img src='assets/location-icon.png'/></span><span className='home_foodLocation'>{item.address}</span></div>
              {/* <div className='home_category'>
                {item.category.join(', ')}
              </div> */}
            </div>
            <button className='home_requestBtn' onClick={(e)=> {e.preventDefault();this.requestAccept(item.id)}}>Accept</button>
            <button className='home_rejectBtn' onClick={(e)=> {e.preventDefault();this.requestReject(item.id)}}>Reject</button>
            </div>
        ))}
         <hr/>
      <div>
        {this.state.list.map((item, index) =>  (
           <div className='home_boxContainer'><div className='home_leftContainer'>
            <img className='home_food-image' src={'http://69.48.142.41/'+item.image}/>
          </div>
          <div className='home_rightContainer'>
          <div className='home_foodTitle'>{item.title}</div>
              <div className='home_foodLocation'><span><img src='assets/location-icon.png'/></span><span className='home_foodLocation'>{item.address}</span></div>
              {/* <div className='home_category'>
                {item.category.join(', ')}
              </div> */}
            </div>
            
            </div>
        ))}
        
      </div>
      </div>
     
    </div>
  }
}
 

export default Request
