import Footer from './components/Footer';
import Intro from './components/Intro';
import Media from './components/Media';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState(false)
  function changeModeHandler(){
    if(mode){
      console.log(document.body.style);
      document.body.style.backgroundImage='linear-gradient(#0F2027,#203A43)';
      setMode(!mode)
    }
    else{
      document.body.style.backgroundImage='linear-gradient(to left, #12c2e9ed, #c471ed, #f64f59)'
      setMode(!mode)
    }

  }
  return (
    <>
    <Navbar changeMode={changeModeHandler}/>
    <Intro/>
    <Skills/>
    <Projects/>
    <Media/>
    <Footer/>
    </>
  );
}

export default App;
