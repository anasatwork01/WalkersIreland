import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Login from "./views/Login/Login";
import SignUp from "./views/Signup/Signup";
import Navbarr from "./components/Navbar/Navbarr";
import ContactUs from "./views/ContactUs/ContactUs";
import Blogs from "./views/Blogs/Blogs";
import CreateBlog from "./views/CreateBlog/CreateBlog";
import SinglePageBlog from "./views/SinglePageBlog/SinglePageBlog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllRecipes from "./views/Recipes/AllRecipes";
import SinglePageRecipe from "./views/SinglePageRecipe/SinglePageRecipe";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Adventures from "./views/Adventures/Adventures";
import SingleAdventurePage from "./views/SingleAdventurePage/SingleAdventurePage";
import Home from "./views/Home/Home";

function App() {
  //For write Blog
  const isauth = useSelector((state) => state.auth.isAuthenticated);
  const [show, setShow] = useState(true);
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/login" || location.pathname === "/signup") {
      setShow(false);
    }else{
      setShow(true)
    }
  }, [location]);

  return (
    <>
      {show&&<Navbarr />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/adventures" element={<Adventures/>} />
         <Route path="adventures/1" element={<SingleAdventurePage />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="blog/:id" element={<SinglePageBlog />} />
        <Route path="/writeBlog" element={<CreateBlog />} />
        <Route path="/healthyeating" element={<AllRecipes />} />
        <Route path="healthyeating/:id" element={<SinglePageRecipe />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
