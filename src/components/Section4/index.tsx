import React from 'react'

import tems from '../../assets/img/tems.png';
import tems1 from '../../assets/img/tems1.png';
import tems2 from '../../assets/img/tems2.png';
import tems3 from '../../assets/img/tems3.png';

import './style.css'

const Section4: React.FC = () => {
  return (
    <section className='section-4'>
        <img src={tems} alt=""/>
        <div className="section-4_gradient"> 
          <section className='section-4_desc'>
            <div className="section-4_desc__wrapper">
              <h3>‘‘WE HELP ARTISTS FIND THEIR FANS’’</h3>
              <p>Figma files can also be downloaded from our store. These files include the latest Figma features and are synced </p>
            </div>
            <div>
              <div className="section-4_thumbnail_wrapper"> 
                <div className='section-4_grid__img_wrapper gradient__class'>
                  <img src={tems1} alt=""/>
                </div>
                <div className='section-4_grid__img_wrapper gradient__class'>
                  <img src={tems2} alt=""/>
                </div>
                <div className='section-4_grid__img_wrapper gradient__class'>
                  <img src={tems3} alt=""/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
  )
}

export default Section4