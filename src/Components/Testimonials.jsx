import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Testimonials = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Bewertungen</p>
        <h1 className='primary-heading'>
        Was sagen sie?
        </h1>
        <p className="primary-text">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
      </div>
      <Fade>
      <div className="each-slide">
      <div className='testimonial-section-bottom'>
        {/* <img src={ProfilePic} alt="" /> */}
        <p>
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className='testimonials-stars-container'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
        <h2>Jhon Doe 1</h2>
      </div>
      </div>
      <div className="each-slide">
      <div className='testimonial-section-bottom'>
        {/* <img src={ProfilePic} alt="" /> */}
        <p>
        Lorem ipsum dolor sit amet consectetur. Non tincidu magnis facilisis at fringilla quam.
        </p>
        <div className='testimonials-stars-container'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        </div>
        <h2>Jhon Doe 2</h2>
      </div>
      </div>
      </Fade>
    </div>
  );
};

export default Testimonials