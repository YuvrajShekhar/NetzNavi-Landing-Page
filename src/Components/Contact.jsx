import React from 'react'
import {FiArrowRight} from "react-icons/fi"

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>
        Haben wir ihr Interesse geweckt? 
        </h1>
        <h1 className='primary-heading'>Schreiben sie uns und wir kontaktieren Sie</h1>
        <div className='contact-form-container'>
            <input type="text" placeholder='yourmail@gmail.com'/>
            <button className='secondary-button'>anfragen</button>
        </div>
        <button className='secondary-button' style={{marginTop:'2%'}}>
            Melden Sie sich jetzt an <FiArrowRight/>
            </button>
    </div>
  )
}

export default Contact