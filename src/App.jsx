import React from 'react'
import Accordion from './component/Accordion'
import './component/Accordion.css';
const App = () => {
  const data = [
    { q: 'What is React?', ans: 'React is a JavaScript library for building user interfaces.' },
    { q: 'What is JSX?', ans: 'JSX is a syntax extension for JavaScript, used with React to describe what the UI should look like.' },
    { q: 'What is a component?', ans: 'A component is a reusable piece of UI in React, which can be a class or a function.' },
  ];
  return (
    <div className='container'>
      <h1 className='heading'>FAQs</h1>
      {
        data.map((item,index)=>(
           <Accordion key={index} item={item}></Accordion>
        ))
      }
      <div className='footer'>@ 2024 Code Ease With Anu</div>
    </div>
  )
}

export default App
