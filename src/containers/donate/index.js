import React from 'react'
import './style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  currentNavigation,
} from '../../modules/counter'

import { donateService, getCategoryDataApi } from '../../services/donate-service';
import DropdownComp from '../dropdown';

class Donate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      category: '[]',
      availability: 1,
      long: '-75.1738704',
      lat: '40.2518999',
      address: 'Worcester, MA',
      image: '',
    }

  }

  componentDidMount= () => {
    getCategoryDataApi((catData)=> {
    })

    const input = document.getElementById('picture');

      input.addEventListener('change', () => {
        for (let i = 0; i < input.files.length; i++) {
          const file = input.files[i];
          const reader = new FileReader();
          reader.addEventListener('load', () => {
            const image = new Image();
            image.src = reader.result;
            this.setState({
              image: encodeURIComponent(reader.result)
            })
          });
          reader.readAsDataURL(file);
        }
      });
  }

  handleTitleInputChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleDescriptionInputChange = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  handleAddressInputChange = (event) => {
    this.setState({
      address: event.target.value
    })
  }

  tabToSubmitDonation = () => {
    this.props.currentNavigation('home');

    this.props.history.push('home'); 
    donateService({
      title: this.state.title,
      description: this.state.description,
      image: this.state.image,
      lat: this.state.lat,
      long: this.state.long,
      category: this.state.category,
      availability: this.state.availability,
      address: this.state.address

    }, ()=>{
    alert('succesfully posted!!');
    // this.props.currentNavigation('home');
    this.props.history.push('home'); 
   })
  }

  render() {
    return <div>
    <div className='donateHead'>Donate</div>
    <form>
    <div className='availibiltyLable' >Title</div>
		<input type="text" id="title" name="title" placeholder="Enter the title of the food.." value={this.state.title} onChange={this.handleTitleInputChange}/>
    <div className='availibiltyLable'>Description</div>
		<input type="text" id="description" name="title" placeholder="Enter the description of the food.." value={this.state.description} onChange={this.handleDescriptionInputChange} />
    <div className='availibiltyLable'>Address</div>
    <input type="text" id="address" name="title" placeholder="Enter the Address.." value={this.state.address} onChange={this.handleAddressInputChange} />
    <div className='dropdown'>
    <DropdownComp callBack={(data)=>{
      const ddId = data.map(fData=> { return fData.id})
      this.setState({
        category: '['+ddId.toString()+']'
      })
    }}/>
    </div>

    <div className='availibiltyLable'>Upload Picture</div>
		<input type="file" id="picture" name="picture" accept="image/*" multiple/>
		{/* <input type="text" id="quantity" name="quantity" placeholder="Enter the quantity of the food.."/> */}
    <div className='donate_submitBtn'>
		<input type="submit" value="Submit" onClick={(e)=> {e.preventDefault();this.tabToSubmitDonation()}}/>

    </div>
	</form>
    </div>;
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
)(Donate)

