import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path ="/" exact element = {<Home/>}/>
          <Route path ="/menu" exact element = {<Menu/>}/>
          <Route path ="/about" exact element = {<About/>}/>
          <Route path ="/contact" exact element = {<Contact/>}/>

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
