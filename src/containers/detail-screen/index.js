import React from 'react'
import './style.css'
import {getDetailsApi} from '../../services/details-service';


class DetailScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

      componentDidMount = () => {
        getDetailsApi((detailData)=> {
            console.log('deta', detailData)
          this.setState({
            list: [this.state.list,detailData]
          })
        })
      }

      render() {
        return (
          <div>
            <div className='detail_Head'>Detail Screen</div>
            {this.state.list.map((item, index) => (
              <div className="detail-container" key={index}>
                <div className="detail-image">
                  <img src={item.image} alt="Item Image" />
                </div>
                <div className="detail-info">
                  <div className="detail-title">{item.title}</div>
                  <div className="detail-description">{item.description}</div>
                  <div className="detail-category">{item.category}</div>
                  <div className="detail-posted">
                    Posted on {item.postedOn}
                  </div>
                  <div className="detail-posted-by">
                    Posted by {item.postedBy}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      }
      
  }

export default DetailScreen
