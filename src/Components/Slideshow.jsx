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
    { src: auswahl1, caption: "Wähle deine Anbieter aus und trage Kundenwünsche ein" },
    { src: auswahl2, caption: "Wähle zusätzliche Optionen aus" },
    { src: beispiel1, caption: "Vergleiche die besten Kombinationen der Anbieter untereinander (Provisionen sind hier ausgeblendet)" },
    { src: beispiel2, caption: "Suche aus bis zu zehn Angeboten das Beste für den Kunden aus  (Provisionen sind hier ausgeblendet)" }
];


  return (
    <div className='slideshow-section-wrapper'>
    <p className='primary-subheading'>Features</p>
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
    <p className='slideshow-caption'>Für eine vollständige Funktionsübersicht einfach anfragen</p>
</div>

  );
};

export default Slideshow;