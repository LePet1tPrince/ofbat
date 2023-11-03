import Description from '../components/Home/Description';
import Hero from '../components/Home/Hero';
import LargeSpace from '../components/LargeSpace';
import Reviews from '../components/Home/Reviews';
import BlankSpace from '../components/BlankSpace';


const HomeView = () => {
    return (
      <div>
      <BlankSpace/>
      <BlankSpace/>
      <BlankSpace/>

      <Hero/>
      {/* <LargeSpace/> */}
      <Description/>
      <Reviews/>
      </div>
      
    )
  }

  export default HomeView;