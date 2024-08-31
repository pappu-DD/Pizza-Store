import './App.css'

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Allitems from "./components/allitems";
import Addnewitem from "./components/addnewitem";
import UpdateItems from "./components/updateitems";
import Deleteitems from "./components/deleteitem";
import Contact from "./components/contact";
import UpdateItemForm from './components/updateform'; 
import { Formik } from 'formik';

import {
BrowserRouter as Router,
Switch,
Route,
  Link,
  Routes,
} from "react-router-dom";


function App() {

  
  return (
    <>
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allitems" element={<Allitems />} />
        <Route path="/addnewitem" element={<Addnewitem />} />
        <Route path="/updateitems" element={<UpdateItems />} />
        <Route path="/deleteitem" element={<Deleteitems />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/updateitem/:id" component={UpdateItemForm} />
     
      </Routes>
    </>
  );
}
export default App;
