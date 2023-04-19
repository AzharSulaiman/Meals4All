import React from 'react'
import './style.css'
import {getHomeDataApi, requestService, searchService, filterService} from '../../services/home-service';
import {getCategoryDataApi} from '../../services/donate-service';
import DropdownComp from '../dropdown';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      searchItem: '',
      category: '[]'
    }
  }

  componentDidMount = () => {
    getHomeDataApi((homeData)=> {
      this.setState({
        list: homeData
      })
    })
    getCategoryDataApi((catData)=> {
    })
  }

  requestDonation = (itemId) => {
    requestService({
      itemId: itemId
    }, ()=>{
    this.props.history.push('home'); 
   })
  }

  handleSearchInputChange = (event) => {
    this.setState({
      searchItem: event.target.value
    })
  }

  tapToSearch = () => {
    searchService({
      searchTxt: this.state.searchItem
    }, (sData)=>{
    // this.props.history.push('home'); 
      this.setState({
        list: sData
      })
   })
  }

  changeFilter = () => {
    filterService({
      filterTxt: this.state.searchItem
    }, ()=>{
    // this.props.history.push('home'); 
   })
  }

  tapForDetails = (itemIdD) => {
    localStorage.removeItem("itemId");
    localStorage.setItem('itemId', itemIdD)
    this.props.history.push('detail-screen'); 
  }

  render() {
    return <div>
      <div className='home_homeHead'>Home</div>
      <div className='home_searchContainer'>
        <input className='home_searchBox' type="text" placeholder="Search By Title Or Location..." value={this.state.searchItem} onChange={this.handleSearchInputChange}/>
        <img className='home_search-icon' src="assets/search-icon.png" onClick={this.tapToSearch}/>
      </div>
      {/* <div className='home_filterContainer'>
        <DropdownComp title="Filter By Category" callBack={(data)=>{
          const ddId = data.map(fData=> { return fData.id})
          filterService({
            filterVal: ddId
          }, (sData)=>{
            this.setState({
              list: sData
            })
         })
        }}/>
      </div> */}
      <div className='home_container'>
        {this.state.list.map((item, index) =>  (
           <div key={item.title + '_' + index} className='home_boxContainer'><div className='home_leftContainer'>
            <img className='home_food-image' src={'http://69.48.142.41/'+item.image} />
          </div>
          <div className='home_rightContainer'>
              <div className='home_foodTitle' onClick={(e)=> {e.preventDefault();this.tapForDetails(item.id)}}>{item.title}</div>
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
