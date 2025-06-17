
import './App.css'
import Header from './Header'
import Name from './Name'
import Projects from './Projects'
import Intro from './Intro'
import workbg from './assets/workbg.jpeg';
import Contact from './Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {

  return (
    <div>

    <Header />
    <Name />
    <Intro />
    <Projects />
    <Contact />
      
    </div>
  )
}

export default App
