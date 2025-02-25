import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/netznavi_landing3.webp'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const AboutSecond = () => {
  return (
    <div className='about-section-container'>
        {/* <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div> */}
        <div className='about-section-text-container'>
            <p className='primary-subheading'></p>
            <h1 className='primary-heading'> 
            Deine Vorteile...
            </h1>
            <ul>
                <li className="primary-text-about">
                UIdeale Angebote ohne Wartezeit: Begeistere deine Kunden durch schnelle und treffsichere Beratung.
                </li>
                <li className="primary-text-about">
                Verkaufschancen maximieren: Vergleiche alle Anbieter und präsentiere das unschlagbar beste Angebot.
                </li>
                <li className="primary-text-about">
                Intuitive Bedienung: Dank klarer Benutzeroberfläche wird die Nutzung kinderleicht.
                </li>
                <li className="primary-text-about">
                Immer aktuell: Aktionen und Rabatte aller Anbieter werden automatisch berücksichtigt.
                </li>
                <li className="primary-text-about">
                Keine komplizierten Tools mehr: Vergiss PDFs, Excel-Tabellen und manuelle Berechnungen.
                </li>
            </ul>
            

        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt=""/>
        </div>
        <div className='about-section-video-play-container'>
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

export default AboutSecond
