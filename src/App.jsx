
import './App.css';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <main>
      <Navbar/>
      <About id="about"/>
      {/* <Skills id="skills"/>
      <Projects id="projects"/>
      <Contacts id="contacts"/> */}
    </main>
  );
}

export default App;
