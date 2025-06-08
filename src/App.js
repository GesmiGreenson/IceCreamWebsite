import logo from './logo.svg';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/about" element={<About/>}></Route>
     <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
