import React, {useState} from 'react'
import { HeaderContainer, MyHeader, Select, Heading } from "./style";

const AdventuresHeader = ({filterHandler}) => {
    const [dropdownValue, setDropdownValue] = useState('');
  

    const handleDropdownChange = (e) => {
      setDropdownValue(e.target.value);
      filterHandler(e.target.value);
    };

  return (
    <MyHeader>
      <HeaderContainer>
        <Heading>Adventures</Heading>
      <Select onChange={handleDropdownChange}>
      <option value ="">All Tours</option>
        <option value="cycle">Cycle Tours</option>
        <option value="rock">Rock Climbing</option>
        <option value="sea">Sea Kayaking</option>
      </Select>
      </HeaderContainer>
    </MyHeader>
  )
}

export default AdventuresHeader
