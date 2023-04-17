import React from 'react'
import './style.css'
import {getHomeDataApi, requestService} from '../../services/home-service';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      list : [],
    }

  }

  componentDidMount = () => {
    getHomeDataApi((homeData)=> {
      this.setState({
        list: homeData
      })
    })
  }

  

  requestDonation = (itemId) => {
    requestService({
      itemId: itemId

    }, ()=>{
    this.props.history.push('home'); 
   })
  }

  render() {
    return <div>
      <div className='home_homeHead'>Home</div>
      <div className='home_searchContainer'>
        <input className='home_searchBox' type="text" placeholder="Search" />
        <img className='home_search-icon' src="assets/search-icon.png" />
      </div>
      <div className='home_container'>
        {this.state.list.map((item, index) =>  (
           <div key={item.title + '_' + index} className='home_boxContainer'><div className='home_leftContainer'>
            <img className='home_food-image' src={'http://69.48.142.41/'+item.image} />
          </div>
          <div className='home_rightContainer'>
              <div className='home_foodTitle'>{item.title}</div>
              <div className='home_foodLocation'><span><img src='assets/location-icon.png'/></span><span className='home_foodLocation'>{item.address}</span></div>
              <div className='home_category'>
                {item.category.join(', ')}
              </div>
            </div><button className='home_requestBtn' onClick={(e)=> {e.preventDefault();this.requestDonation(item.id)}}>Request</button></div>
        ))}
        
      </div>
    </div>;
  }
}
 

export default Home
