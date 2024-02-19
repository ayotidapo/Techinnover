import React from 'react'
import Button from '../../common/Button';
import { ReactComponent as ArrowLeft } from '../../assets/img/arrowLeft.svg';
import boys from '../../assets/img/5boys__.png';

import './style.css'

const Section2: React.FC = () => {
  return (
   <section className='section-2'>
        <div>
          <div className='section-2__imgbox'>
            <img src={boys} alt="five-boys-pic"/>
          </div>
        </div>
        <div className='section-2__desc' >
          <div className='section-2_wrapper'>
            <h3 >YOUR CAREER IS IN YOUR HANDS</h3>
            <div>
              <p>Figma files can also be downloaded from our store. These files include the latest Figma features and are synced with the Webflow template.</p>
              <p>Figma files can also be downloaded from our store. These files include the latest Figma features and are synced </p>
              <p>Figma files can also be downloaded from our store. These files include the latest Figma features and are synced with the Webflow template.</p>
            </div>
            <Button className='section-2_trybtn'><span>Try it now</span> <ArrowLeft style={{marginLeft:'1.7rem'}}/></Button>
          </div>
        </div>
      </section>
  )
}

export default Section2