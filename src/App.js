import './components/css/App.css';
// import ContactForm from './components/ContactForm'
import Navbar from './components/global/Navbar';
import Footer from './components/Footer';
import HomeView from './pages/HomeView';
import { Routes, Route } from 'react-router-dom';
import BlankSpace from './components/BlankSpace';
import TestView from './pages/TestView';
import Fade from 'react-reveal/Fade';
import Stylesheet from './components/Stylesheet';
import AboutView from './pages/AboutView';
import Social from './components/global/Social';
import ContactView from './pages/ContactView';
import PreorderView from './pages/PreorderView';
import NotFound from './pages/NotFound';
import ComingSoon from './components/ComingSoon';
import GlobalView from './components/global/GlobalView';
import PreorderViewPic from './pages/PreorderViewPic';
import ReviewView from './pages/ReviewView';



function App() {
  

  return (
    <div>
      <BlankSpace/>
      {/* <GlobalView/> */}
      <Navbar/>
      {/* <Social/> */}

      <Routes>
        {/* <Route exact path="/" element={<ComingSoon />}/> */}
        <Route exact path="/" element={<HomeView />}/>
        <Route exact path="/about" element={<AboutView />}/>
        <Route exact path="/contact" element={<ContactView />}/>
        {/* <Route exact path="/reviews" element={<ReviewView />}/> */}

        {/* <Route exact path="/prelaunch" element={<PreorderView />}/> */}
        {/* <Route exact path="/prelaunch-pic" element={<PreorderViewPic />}/> */}



        <Route exact path="/test" element={<TestView />}/>
        <Route  path="*" element={<NotFound/>} />



       
      </Routes>
      <Footer/>
      {/* <Stylesheet/> */}
      
      
    </div>
  );
}

export default App;

