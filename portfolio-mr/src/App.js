import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/about"> <About /> </Route>

          <Route path="/projects"> <Projects /> </Route>

          <Route path="/contact"> <Contact /> </Route>

          <Route path="/"> <Home /> </Route>
        </Switch>
        
      </Router>
    </div>
  );
}
