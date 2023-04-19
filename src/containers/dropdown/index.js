


import React, { useState, useEffect} from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { getCategoryDataApi } from '../../services/donate-service';


class DropdownComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: [],
      optionList: []
    }
  }

  
  componentDidMount = () => {
    getCategoryDataApi((categorData)=> {
      this.setState({
        optionList: categorData
      })
    })
  }

  handleSelect = (option) => {
    if (this.state.selectedOptions.includes(option)) {
      this.setState({
        selectedOptions:this.state.selectedOptions.filter((item) => item !== option)
      },()=>{
        this.props.callBack(this.state.selectedOptions)
      })
    } else {
      this.setState({
        selectedOptions:[...this.state.selectedOptions, option]
      },()=>{
        this.props.callBack(this.state.selectedOptions)
      })
    }
  };

  render() {
    return (
      <DropdownButton id="dropdown-basic-button" title={this.props.title?this.props.title:'Select Option'}>
        {this.state.optionList.map((option) => (
          <Dropdown.Item key={option.id} onClick={() => this.handleSelect(option)}>
            {option.name}
            {this.state.selectedOptions.includes(option) && ' ✔'}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    );
  }
}

export default DropdownComp;