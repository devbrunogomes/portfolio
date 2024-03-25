
import { useState } from 'react';
import './App.css';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>

    <main>
      <Navbar/>
      <About id="about"/>
      <Skills id="skills"/>
      <Projects id="projects"/>
      <Contacts id="contacts"/>
    </main>
    </Provider>
  );
}

export default App;
