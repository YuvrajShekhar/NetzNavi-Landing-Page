import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>
            Lorem ipsrum
        </h1>
        <h1 className='primary-heading'>Haben Sie Fragen? Lassen Sie sich von uns helfen</h1>
        <div className='contact-form-container'>
            <input type="text" placeholder='yourmail@gmail.com'/>
            <button className='secondary-button'>einreichen</button>
        </div>
    </div>
  )
}

export default Contact