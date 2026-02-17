import React from 'react'
import Hero from './Components/Home/Hero'
import Certificates from './Components/CoreProjects/CoreProjects'
import Footer from './Components/Footer/Footer'
import ContactMe from './Components/ContactMe/ContactMe'
import Header from './Components/Header/Header'
import Projects from './Components/Projects/Projects'
import Qualifications from './Components/Qualifications/Qualifications'
import Skill from './Components/Skills/Skill'
import CoreProjects from './Components/CoreProjects/CoreProjects'
import { useState } from "react";
import Loading from './Components/Loading/Loading'

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="mx-auto overflow-hidden">
      {!isLoaded && <Loading onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <Header />
          <Hero />
          <Projects />
          <Qualifications />
          <Skill />
          <CoreProjects />
          <ContactMe />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;