import './App.css';
import About from './components/About/about';
import Codeforces from './components/codeforces/codeforces';
import Footer from './components/Footer/footer';
import Landing from './components/Landing/landing';
import Projects from './components/Projects/projects';
import Timeline from './components/timeline/timeline';
import ScrollToTop from "react-scroll-to-top";
import NewSkills from './components/NewSkills/newSkills';
import Navbar from './components/Navbar/navbar';


function App() {

  

  return (
    <div className="App">
      <ScrollToTop color='grey'/>
      <Navbar/>
      <Landing />
      <About />
      <Timeline />
      <NewSkills />
      <Projects />
      <Codeforces />
      <Footer />             
    </div>
  );
}

export default App;
