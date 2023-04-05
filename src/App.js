import { Route, Routes } from 'react-router';
import './App.css';
import Login from './views/Login/Login';
import SignUp from './views/Signup/Signup';
import Navbarr from './components/Navbarr';
import Dummy from './components/Dum';
import ContactUs from './views/ContactUs/ContactUs';

function App() {
  return (
    <div>
      <Navbarr/>
    <Routes>
      <Route path='/home' element={<Dummy/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </div>
  );
}

export default App;
