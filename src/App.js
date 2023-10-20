import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarRes from './Component/include/NavbarRes';
import Footers from './Component/include/Footers';
import Home from './Component/pages/Home';
import Courses from './Component/pages/Courses';

function App() {
  return (
    <div >
      <BrowserRouter>
      <NavbarRes/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/about" element={<About/>}></Route> */}
        <Route path="/courses" element={<Courses/>}></Route>
        {/* <Route path="/teacher" element={<Teacher/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route> */}
        {/* <Route path="/contact" element={<Contact/>}></Route> */}
      </Routes>
      <Footers/>
      </BrowserRouter>
    </div>
  );
}

export default App;
