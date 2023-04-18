import React, { useState, useEffect} from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { getCategoryDataApi } from '../../services/donate-service';

const DropdownComp = (props) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [optionList, setOptionList] = useState([]);

  useEffect(() => {
    getCategoryDataApi((categorData)=> {
            setOptionList(categorData)
          })
  }, [optionList.length == 0]);

  useEffect(() => {
    props.callBack(selectedOptions)
  }, [selectedOptions]);

  const handleSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <DropdownButton id="dropdown-basic-button" title={props.title?props.title:'Select Option'}>
      {optionList.map((option) => (
        <Dropdown.Item key={option.id} onClick={() => handleSelect(option)}>
          {option.name}
          {selectedOptions.includes(option) && ' ✔'}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropdownComp;

