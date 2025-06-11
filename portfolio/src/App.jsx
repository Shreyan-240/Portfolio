import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Name from './Name'
import Projects from './Projects'
import Intro from './Intro'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {

  return (
    <>
    <Header />
    <Name />
    <Intro />
    <Projects />
      
    </>
  )
}

export default App
