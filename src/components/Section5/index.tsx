import React from 'react'

import wizkid from '../../assets/img/wizkid.png';
import burna from '../../assets/img/burna.png';
import tiwa from '../../assets/img/tiwa.png';
import rema from '../../assets/img/rema.png';
import man from '../../assets/img/man.png';

import './style.css'

const Section5: React.FC = () => {
  return (
     <section className='section-5'>
        <h2 className='section-5_h2'>JOIN TOP ARTISTS, BUILD YOUR <span>FANBASE</span></h2>
        <p className='section-5_p'>Figma files can also be downloaded from our store. These files include the latest Figma features and are synced</p>
        <div className="section-5_thumbnail_wrapper">
          <div className='section-5_thumbnail gradient__class'>
            <img src={wizkid} alt=""/>
          </div>
          <div className='section-5_thumbnail'>
            <img src={burna} alt=""/>
          </div>
          <div className='section-5_thumbnail'>
            <img src={tiwa} alt=""/>
          </div>
           <div className='section-5_thumbnail'>
            <img src={rema} alt=""/>
          </div>
          <div className='section-5_thumbnail gradient__class'>
            <img src={man} alt=""/>
          </div>
        </div>
      </section>
  )
}

export default Section5