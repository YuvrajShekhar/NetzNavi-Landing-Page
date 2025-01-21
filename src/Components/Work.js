import React from 'react'
import MarketPenetration from "../Assets/market-penetration.png"
import Stopwatch from "../Assets/stopwatch.png"
import Dependable from "../Assets/dependable.png"

const Work = () => {
  const WorkInfoData = [{
    image : MarketPenetration,
    title : "genaue Ergebnisse",
    text : "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
},{
    image : Stopwatch,
    title : "Superschnell",
    text : "Lorem ipsum dolor sit amet consectetur. Maecenas orci et"
    
  },{
    image : Dependable,
    title : "Zuverlässig",
    text : "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum"
    
  },
]

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Merkmale</p>
            <h1 className='primary-heading'>Wie es funktioniert</h1>
            <p className='primary-text'>
            NetzNavi wird täglich mit den neuesten Tarifen der Provider aktualisiert. Anhand der Kundenngaben wird dann die beste Kombination binnen Sekunden berechnet.
            </p>
        </div>
        <div className='work-section-bottom'>
            {
                WorkInfoData.map((data)=> (
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work