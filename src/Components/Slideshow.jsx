import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import auswahl1 from "../Assets/auswahl1.JPG"
import auswahl2 from "../Assets/auswahl2.JPG"
import beispiel1 from "../Assets/beispiel1.JPG"
import beispiel2 from "../Assets/beispiel2.JPG"

const Slideshow = () => {
  const images = [
    auswahl1,auswahl2,beispiel1,beispiel2
  ];
  

  return (
    <div className='slideshow-section-wrapper'>
        <p className='primary-subheading'>SlideShow</p>
        <Fade>
            <div className="each-slide">
            <div>
                <img src={images[0]} />
            </div>
            </div>
            <div className="each-slide">
            <div>
                <img src={images[1]} />
            </div>
            </div>
            <div className="each-slide">
            <div>
                <img src={images[2]} />
            </div>
            </div>
            <div className="each-slide">
            <div>
                <img src={images[3]} />
            </div>
            </div>
        </Fade>
    </div>
  );
};

export default Slideshow;