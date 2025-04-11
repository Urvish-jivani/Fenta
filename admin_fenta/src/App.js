import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Item from './Item';
import Signup from './Signup';
import Adminlogin from './Adminlogin';
import Adminregistration from './Adminregistration';
import Booktable from './Booktable';
import Showdata from './Showdata';
import Showitem from './Showitem';
import Updateitem from './Updateitem';
import Updatebooking from './Updatebooking';
import Updatesignup from './Updatesignup';
import Viewbooking from './Viewbooking';
import Cart from './Cart';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Item />} />
           <Route path="Item" element={<Item />} />
         <Route path="Signup" element={<Signup />} />
         <Route path="Adminlogin" element={<Adminlogin />} /> 
         <Route path="Adminregistration" element={<Adminregistration />} /> 
         <Route path="Booktable" element={<Booktable />} /> 
         <Route path="Showdata" element={<Showdata />} /> 
         <Route path="Showitem" element={<Showitem />} /> 
         <Route path="/Updateitem" element={<Updateitem />} /> 
         <Route path="/Updatebooking" element={<Updatebooking />} /> 
         <Route path="/Updatesignup" element={<Updatesignup />} /> 
         <Route path="/Viewbooking" element={<Viewbooking />} /> 
         <Route path="/Cart" element={<Cart />} />


        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
