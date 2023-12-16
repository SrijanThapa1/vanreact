// import logo from './logo.svg';
import React from 'react';
// import ReactDom from 'react-dom';
import {Routes, Route,Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';



function App() {
  return (
    <div className="App">
      <header>
        <Link className='site-logo' to="/"> #Vanlife</Link>
        <nav className='nav'>
          {/* <Link to='/' className='nav-items'> Home</Link> */}
          <Link to='/about' className='nav-items'>About</Link>
        </nav>
      </header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
  );
}

export default App;
