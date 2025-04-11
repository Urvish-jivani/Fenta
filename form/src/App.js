import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Menu1 from './Menu1';
import About from './About';
import Book from './Book';
import Registration1 from './Registration1';
import Login from './Login';



function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} /> 
          <Route path="Menu1" element={<Menu1 />} />
           <Route path="About" element={<About />} /> 
           <Route path="Home" element={<Home />} /> 
           <Route path="Book" element={<Book />}/>
           <Route path="Registration1" element={<Registration1 />}/>
           <Route path="Login" element={<Login />}/>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );  
}

export default App;
