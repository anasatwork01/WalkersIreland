import { Route, Routes } from 'react-router';
import './App.css';
import Login from './views/Login/Login';
import SignUp from './views/Signup/Signup';
import Navbarr from './components/Navbar/Navbarr';
import ContactUs from './views/ContactUs/ContactUs';
import Blogs from './views/Blogs/Blogs';
import CreateBlog from './views/CreateBlog/CreateBlog';
import SinglePageBlog from './views/SinglePageBlog/SinglePageBlog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbarr/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path="/blog" element={<Blogs/>}/>
      <Route path='/writeBlog' element={<CreateBlog/>}/>
      <Route path='/post' element={<SinglePageBlog/>}/>
    </Routes>
    <ToastContainer/>
    </div>
  );
}

export default App;
