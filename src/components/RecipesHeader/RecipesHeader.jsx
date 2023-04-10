import React, {useState} from 'react'
import { HeaderContainer, MyHeader, Select, Heading } from "./style";

const RecipesHeader = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownValue, setDropdownValue] = useState('');
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleDropdownChange = (e) => {
      setDropdownValue(e.target.value);
    };

  return (
    <MyHeader>
      <HeaderContainer>
        <Heading>Recipes Section</Heading>
      <Select value={dropdownValue} onChange={handleDropdownChange}>
      <option defaultValue = "All Dishes">All Dishes</option>
        <option value="Pre Walking Dishes">Pre Walking Dishes</option>
        <option value="Post Walking Dishes">Post Walking Dishes</option>
        <option value="Tasty Healthy Dishes">Tasty Healthy Dishes</option>
      </Select>
      </HeaderContainer>
    </MyHeader>
  )
}

export default RecipesHeader
