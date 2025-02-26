import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import auswahl1 from "../Assets/auswahl1.JPG"
import auswahl2 from "../Assets/auswahl2.JPG"
import beispiel1 from "../Assets/beispiel1.JPG"
import beispiel2 from "../Assets/beispiel2.JPG"
import { Slide } from 'react-slideshow-image';

const Slideshow = () => {
//   const images = [
//     auswahl1,auswahl2,beispiel1,beispiel2
//   ];
  
  const images = [
    { src: auswahl1, caption: "insert caption 1 here" },
    { src: auswahl2, caption: "insert caption 2 here" },
    { src: beispiel1, caption: "insert caption 3 here" },
    { src: beispiel2, caption: "insert caption 4 here" }
];


  return (
    <div className='slideshow-section-wrapper'>
    <p className='primary-subheading'>SlideShow</p>
    <Slide arrows={true} infinite={true}>
        {images.map((image, index) => (
            <div className="each-slide" key={index}>
                <div>
                    <img src={image.src} alt={`Slide ${index + 1}`} />
                    <p className="image-caption">{image.caption}</p>
                </div>
            </div>
        ))}
    </Slide>
</div>

  );
};

export default Slideshow;