import React from 'react';
import logo from '../styles/lib.png';
import '../styles/mainHeader.css';

export default function MainHeader() {

  return (
    <header>
        <div className= 'heading'>
            <div className="logo">
                <img src={logo} alt="LMA_Logo"/>
            </div>
            <div className= 'title'>
                <h1>SBNK LIBRARY </h1>
            </div>
        </div>
    </header>
  )
}