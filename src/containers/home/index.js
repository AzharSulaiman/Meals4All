import React from 'react'
import './style.css'
import BottomNavigation  from '../bottom-navigate';

import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>
      <div className='homeHead'>Home</div>
      <div className='searchContainer'>
        <input className='searchBox' type="text" placeholder="Search" />
        <img className='search-icon' src="assets/search-icon.png" />
      </div>
      <div className='boxContainer'>
        <div className='leftContainer'>
          <img className='food-image' src="assets/food-image.jpeg" />
        </div>
        <div className='rightContainer'>
          <div className='foodTitle'>Food Name</div>
          <div className='foodAvailability'>4:00PM - 10:00PM</div>
          <div className='foodLocation'>Location</div>
        </div>
        <button className='requestBtn'>Request</button>
      </div>
      <div className='boxContainer'>
        <div className='leftContainer'>
          <img className='food-image' src="assets/food-image.jpeg" />
        </div>
        <div className='rightContainer'>
          <div className='foodTitle'>Food Name</div>
          <div className='foodAvailability'>4:00PM - 10:00PM</div>
          <div className='foodLocation'>Location</div>
        </div>
        <button className='requestBtn'>Request</button>
      </div>
      <div className='boxContainer'>
        <div className='leftContainer'>
          <img className='food-image' src="assets/food-image.jpeg" />
        </div>
        <div className='rightContainer'>
          <div className='foodTitle'>Food Name</div>
          <div className='foodAvailability'>4:00PM - 10:00PM</div>
          <div className='foodLocation'>Location</div>
        </div>
        <button className='requestBtn'>Request</button>
      </div>
      <div className='boxContainer'>
        <div className='leftContainer'>
          <img className='food-image' src="assets/food-image.jpeg" />
        </div>
        <div className='rightContainer'>
          <div className='foodTitle'>Food Name</div>
          <div className='foodAvailability'>4:00PM - 10:00PM</div>
          <div className='foodLocation'>Location</div>
        </div>
        <button className='requestBtn'>Request</button>
      </div>
      <div className='boxContainer'>
        <div className='leftContainer'>
          <img className='food-image' src="assets/food-image.jpeg" />
        </div>
        <div className='rightContainer'>
          <div className='foodTitle'>Food Name</div>
          <div className='foodAvailability'>4:00PM - 10:00PM</div>
          <div className='foodLocation'>Location</div>
        </div>
        <button className='requestBtn'>Request</button>
      </div>
    </div>;
  }
}
 

export default Home
