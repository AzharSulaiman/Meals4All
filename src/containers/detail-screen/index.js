import React from 'react'
import './style.css'
import {getDetailsApi} from '../../services/details-service';
import Moment from 'react-moment';

class DetailScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            date: ''
        }
    }
    
    componentDidMount = () => {
        getDetailsApi((detailData)=> {
           const dateFormat=new Date(detailData.updated_at).toDateString()
           this.setState({
            date: dateFormat
           })

          this.setState({
            list: [...this.state.list,detailData]
          })
        })
        console.log('redy', this.state.list)
        // this.state.date = new Date()
    }

      render() {
        return (
          <div>
            <div className='detail_Head'>Detail Screen</div>
            {this.state.list.map((item, index) => (
              <div className="detail-container" key={index}>
                <div className="detail-image-container">
                  <img className="detail-image" src={'http://69.48.142.41/'+item.image} alt="Item Image" />
                </div>
                <div className="detail-info">
                <div className='headLabel'>Title</div>
                  <div className="detail-title">{item.title}</div>
                  <div className='headLabel'>Desciption</div>
                  <div className="detail-description">{item.description}</div>
                  <div className='headLabel'>Category</div>
                  <div className="detail-category">  {item.category.join(', ')}</div>
                  <div className='headLabel'>Posted On</div>
                  <div className="detail-category">{this.state.date}</div>
                  {/* <div className='headLabel'>Posted By</div> */}
                  {/* <div className="detail-posted-by">
                   {item.postedBy}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        );
      }
      
  }

export default DetailScreen
