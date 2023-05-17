import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';

import { AppContainer } from './components/styled/Intro.styled';

function App() {
  return (
    <div>
      <AppContainer>
      <Header/>    
      <Intro/>  
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact/>
      </AppContainer>
    </div>
  );
}

export default App;
