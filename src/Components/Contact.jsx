import React from 'react'

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
    </div>
  )
}

export default Contact