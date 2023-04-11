import { Route, Routes } from 'react-router';
import './App.css';
import Login from './views/Login/Login';
import SignUp from './views/Signup/Signup';
import Navbarr from './components/Navbar/Navbarr';
import ContactUs from './views/ContactUs/ContactUs';
import Blogs from './views/Blogs/Blogs';
import CreateBlog from './views/CreateBlog/CreateBlog';
import SinglePageBlog from './views/SinglePageBlog/SinglePageBlog';
import AllRecipes from './views/Recipes/AllRecipes';
import RecipesHeader from './components/RecipesHeader/RecipesHeader';
import SinglePageRecipe from './views/SinglePageRecipe/SinglePageRecipe'

function App() {
  return (
    <div>
      <Navbarr/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path="/blog" element={<Blogs/>}/>
      <Route path='blog/:id' element={<SinglePageBlog/>}/>
      <Route path='/writeBlog' element={<CreateBlog/>}/>
      <Route path='/healthyeating' element={<AllRecipes/>}/>
      <Route path='healthyeating/:id' element={<SinglePageRecipe/>}/>

    </Routes>
    </div>
  );
}

export default App;
