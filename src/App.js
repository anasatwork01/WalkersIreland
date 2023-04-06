import { Route, Routes } from 'react-router';
import './App.css';
import Login from './views/Login/Login';
import SignUp from './views/Signup/Signup';
import Navbarr from './components/Navbar/Navbarr';
import ContactUs from './views/ContactUs/ContactUs';
import Blogs from './views/Blogs/Blogs';

function App() {
  return (
    <div>
      <Navbarr/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path="/blog" element={<Blogs/>}/>
    </Routes>
    </div>
  );
}

export default App;
