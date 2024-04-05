import React from 'react';
import { BrowserRouter,Route,Routes } from  'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';
// import Summary from './components/summary';
// import Footer from './components/footer';
import Summary from './components/summary';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/skills' element={<Skills/>}></Route>
    <Route path='/projects' element={<Projects/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/summary' element={<Summary/>}></Route>
      {/* <Summary/> */}
      </Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
