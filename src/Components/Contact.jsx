import React , { useRef } from 'react'
import {FiArrowRight} from "react-icons/fi"
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bz2ep9o', 'template_gqtdfvc', form.current, {
        publicKey: 'BHrJzyb1ZbdjBK4ul',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>
        Haben wir ihr Interesse geweckt? 
        </h1>
        <h1 className='primary-heading'>Schreiben sie uns und wir kontaktieren Sie</h1>
        <form ref={form} onSubmit={sendEmail}>
        <div className='contact-form-container'>
            <input type="text" name="user_name" placeholder='Dein Name'/>
        </div>
        <div className='contact-form-container'>
            <input type="text" name="message" placeholder='Schreiben Sie uns hier'/>
            <button className='secondary-button' type="submit" value="Send" >anfragen</button>
        </div>
        </form>
        <button className='secondary-button' style={{marginTop:'5%'}} onClick={() => window.open("https://netznavi.net/", "_blank", "noopener,noreferrer")}>
            Melden Sie sich jetzt an <FiArrowRight/>
            </button>
    </div>
  )
}

export default Contact