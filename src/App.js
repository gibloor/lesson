import './App.css';
import React, { useEffect, useState } from 'react';
import Lesson1 from './components/Lesson1/Lesson1.js';
import Lesson2 from './components/Lesson2/Lesson2.js';
import Lesson3 from './components/Lesson3/Lesson3.js';
import Lesson4 from './components/Lesson4/Lesson4.js';
import Lesson6 from './components/Lesson6/Lesson6.js';
import Lesson8 from './components/Lesson8/Lesson8.js';

function App() {

  return (
    <div className="glBlock">
      <div className="lesson1">
        <Lesson1/>
      </div>
      <div className="lesson2">
        <Lesson2/>
      </div>
      <div className='lesson3'>
        <Lesson3/>
      </div>
      <div className='lesson4'>
        <Lesson4/>
      </div>
      <div className='lesson6'>
        <Lesson6/>
      </div>
      <div className='lesson8'>
        <Lesson8/>
      </div>
    </div>
  );
}

export default App;
