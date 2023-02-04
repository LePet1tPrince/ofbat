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
import ContactView from './pages/ContactView';
import PreorderView from './pages/PreorderView';
import NotFound from './pages/NotFound';



function App() {
  

  return (
    <div>
      <BlankSpace/>
      <Navbar/>
      <Social/>

      <Routes>
        <Route exact path="/" element={<HomeView />}/>
        <Route exact path="/about" element={<AboutView />}/>
        <Route exact path="/contact" element={<ContactView />}/>
        <Route exact path="/preorder" element={<PreorderView />}/>
        <Route exact path="/test" element={<TestView />}/>
        <Route  path="*" element={<NotFound/>} />



       
      </Routes>
      <Footer/>
      {/* <Stylesheet/> */}
      
      
    </div>
  );
}

export default App;

