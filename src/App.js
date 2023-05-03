import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import About from './About';
import Singleproduct from './Singleproduct';
import { Routes, Route } from "react-router-dom"
import Category from './Category';

function App() {

  return (
    <>
      {/* <Header/> */}
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Singleproduct/> */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="singleproduct/:id" element={ <Singleproduct/> } />
        <Route path="category/:id" element={ <Category/> }/>
      </Routes>
      
    </>

  );
}

export default App;