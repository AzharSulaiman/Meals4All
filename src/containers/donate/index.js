import React from 'react'
import './style.css'
import BottomNavigation  from '../bottom-navigate';

import { Link } from 'react-router-dom'

class Donate extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>
    <div className='donateHead'>Donate</div>
    <form>
		<input type="text" id="title" name="title" placeholder="Enter the title of the food.."/>
    <div className='availibiltyLable'>Availibility:</div>
		<input type="time" className='timeBar' id="fromTime" name="fromTime" placeholder="Enter the time."/>
		<input type="time" className='timeBar' id="toTime" name="toTime" placeholder="Enter the time."/>
		<input type="text" id="location" name="location" placeholder="Enter the location of the food.."/>
		<input type="file" id="picture" name="picture" accept="image/*"/>
		<input type="text" id="quantity" name="quantity" placeholder="Enter the quantity of the food.."/>
		<input type="submit" value="Submit"/>
	</form>
    </div>;
  }
}
 

export default Donate
