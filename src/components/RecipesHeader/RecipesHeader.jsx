import React, {useState} from 'react'
import { HeaderContainer, MyHeader, Select, Heading } from "./style";

const RecipesHeader = ({filterHandler}) => {
    const [dropdownValue, setDropdownValue] = useState('');
  

    const handleDropdownChange = (e) => {
      setDropdownValue(e.target.value);
      filterHandler(e.target.value);
    };

  return (
    <MyHeader>
      <HeaderContainer>
        <Heading>Healthy Eating</Heading>
      <Select onChange={handleDropdownChange}>
      <option value ="">All Meals</option>
        <option value="preWalk">Pre Walking Meals</option>
        <option value="postWalk">Post Walking Meals</option>
        <option value="winter">Winter Meals</option>
        <option value="tasty">Tasty Healthy Meals</option>
      </Select>
      </HeaderContainer>
    </MyHeader>
  )
}

export default RecipesHeader
