import React from 'react'
import './App.css';
import logo from './Wow.jpg';

export default function App() {

  return (
    <div className="App">
      <img src={logo} className='logo' alt='logo'/>
      <navbar className="navbar">
       {/*} <ul className='ul'>
          <a href="#"><li id="li">Home</li></a>
          <a href="#"><li id="li">Contact</li></a>
          <a href="#"><li id="li">About</li></a>
  </ul> */}
      </navbar>

    </div>
  );
}

