import React,{useState} from 'react'
import './Accordion.css'
const Accordion = ({item}) => {
  const [isOpen,setIsOpen] = useState(false)  
  const toggleAccordion=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='accordion'>
      <div className='qns' onClick={toggleAccordion}>
        <button>
           {isOpen ? <i className='fa-solid fa-minus'></i> : <i className='fa-slod fa-plus'></i>}
        </button>
        <h3>{item.q}</h3>
      </div>
      <div className={`content ${isOpen ? 'show' : ''}`}>
        <p>{item.ans}</p>
      </div>
    </div>
  )
}

export default Accordion
