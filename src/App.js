import './components/css/App.css';
// import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './pages/HomeView';
import { Routes, Route } from 'react-router-dom';
import BlankSpace from './components/BlankSpace';
import TestView from './pages/TestView';
import Fade from 'react-reveal/Fade';
import Stylesheet from './components/Stylesheet';
import AboutView from './pages/AboutView';
import Social from './components/Social';



function App() {
  

  return (
    <div>
      <BlankSpace/>
      <Navbar/>
      <Social/>

      <Routes>
        <Route exact path="/" element={<HomeView />}/>
        <Route  path="/about" element={<AboutView />}/>

       
      </Routes>
      <Footer/>
      {/* <Stylesheet/> */}
      
      
    </div>
  );
}

export default App;

