import { Route, Routes } from 'react-router';
import './App.css';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  );
}

export default App;
