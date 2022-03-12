import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { ReactDOM } from 'react';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect
} from 'react-router-dom';



function App() {
  return (
      <Router className="App">
        <Header/>
        <Routes>
          {/* <Header/> */}
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/Contact" element={<Contact/>}></Route>
            <Route exact path="/AboutMe" element={<AboutMe/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;