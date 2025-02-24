import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../Assets/home-banner-background.png'
// import bannerImage from '../Assets/home-banner-image.png'
import bannerImage from '../Assets/netznavi_landing01.webp'
import {FiArrowRight} from "react-icons/fi"


const Home = () => {
  return (
    <div className="home-container">
        <Navbar/>
        <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt=""/>
        </div>
        <div className="home-text-section">
            <h1 className='primary-heading'>
            NetzNavi - Das ultimative Tool für Mobilfunkhändler
            </h1>
            <p className='primary-text'>
            NetzNavi hebt deinen Verkaufsprozess auf ein neues Level, indem es alle Tarife  der Mobilfunkprovider vergleicht. Dank smarter Technologie erhältst du in Sekundenschnelle die besten Vertragskombinationen für deine Kunden - und maximierst dabei deine Provision.
            </p>
            <button className='secondary-button'>
            Melden Sie sich jetzt an <FiArrowRight/>
            </button>
        </div>
        <div className='home-image-section'>
              <img src={bannerImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home