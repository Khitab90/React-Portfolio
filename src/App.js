import Header from './Components/Header.js';
import Body from './Components/Body.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js';
import './App.css';

function App() {
  return (
    <div id="app" className="App">
      <Header />
      <Body />
      <About />
      <Projects />
    </div>
  );
}

export default App;
