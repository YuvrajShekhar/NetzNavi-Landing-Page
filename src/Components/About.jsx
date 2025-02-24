import React from 'react'
import AboutBackground from '../Assets/about-background.png'
// import AboutBackgroundImage from '../Assets/about-background-image.png'
import AboutBackgroundImage from '../Assets/netznavi_landing2.webp'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" style={{paddingRight: "4%"}}/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'> Funktionen</p>
            <h1 className='primary-heading'> 
            Was NetzNavi dir bietet
            </h1>
            <ul>
                <li className="primary-text-about">
                Umfassender Anbietervergleich: Vergleiche die Angebote aller Mobilfunkanbieter in einer Plattform.
                </li>
                <li className="primary-text-about">
                Automatische Vertragsanalyse: Berechnung und Optimierung von Millionen Kombinationen in Echtzeit.
                </li>
                <li className="primary-text-about">
                Individuelle Angebotserstellung: Passgenaue Lösungen für jeden Kunden, unabhängig vom Anbieter.
                </li>
                <li className="primary-text-about">
                Einfache Nutzung im Browser: Starte direkt ohne Installation. Provisionsoptimierung: Finde nicht nur das beste Angebot für deine Kunden, sondern auch für dich.
                </li>
            </ul>
            {/* <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'>
                    {" "}
                    <BsFillPlayCircleFill/> Watch Video
                </button>
            </div> */}

        </div>
    </div>
  )
}

export default About
