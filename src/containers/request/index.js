import React from 'react'
import './style.css'
import BottomNavigation  from '../bottom-navigate';

import { Link } from 'react-router-dom'

class Request extends React.Component {
  constructor() {
    super();
    this.state = {
      list : [{
        title: 'Food Name',
        image: 'assets/food-image.jpeg',
        availibility: '4:00PM - 10:00PM',
        location: 'Location'
      },{
        title: 'Food Name',
        image: 'assets/food-image.jpeg',
        availibility: '4:00PM - 10:00PM',
        location: 'Location'
      },{
        title: 'Food Name',
        image: 'assets/food-image.jpeg',
        availibility: '4:00PM - 10:00PM',
        location: 'Location'
      },{
        title: 'Food Name',
        image: 'assets/food-image.jpeg',
        availibility: '4:00PM - 10:00PM',
        location: 'Location'
      },{
        title: 'Food Name',
        image: 'assets/food-image.jpeg',
        availibility: '4:00PM - 10:00PM',
        location: 'Location'
      }]
    }
  }
  render() {
    return <div>
    <div className='homeHead'>Requests</div>
    <div className='searchContainer'>
      <input className='searchBox' type="text" placeholder="Search" />
      <img className='search-icon' src="assets/search-icon.png" />
    </div>
    <div className='home_container'>
        {this.state.list.map((item, index) =>  (
           <div className='home_boxContainer'><div className='home_leftContainer'>
            <img className='home_food-image' src={item.image} />
          </div>
          <div className='home_rightContainer'>
              <div className='home_foodTitle'>{item.title}</div>
              <div className='home_foodAvailability'>{item.availibility}</div>
              <div className='home_foodLocation'><span><img src='assets/location-icon.png'/></span>{item.location}</div>
            </div>
            <button className='home_requestBtn'>Request</button>
            <button className='home_rejectBtn'>Reject</button>
            </div>
        ))}
        
      </div>
    </div>
  }
}
 

export default Request
