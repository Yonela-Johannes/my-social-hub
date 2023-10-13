import './app.css';
import './index.css'
import Landing from './components/Landing';
import About from './screens/About';
import Mentors from './components/Mentors';

function App() {

  return (
    <div className="app">
        <Landing />
        <About />
        <Mentors />
    </div>
  );
}

export default App;
