import React from 'react'
import Button from '../../common/Button';
import { ReactComponent as ArrowLeft } from '../../assets/img/arrowLeft.svg';
import { ReactComponent as CaretUp } from '../../assets/img/caret.svg';
import rounded from '../../assets/img/rounded.png';
import chart from '../../assets/img/chart.png';

import './style.css'

const Section3: React.FC = () => {
  return (
     <section className='section-3'>
        <div className='section-3__desc'>
          <div className='section-3_descwrapper'>
            <h3 >USE YOUR STATS TO MAKE MOVES</h3>
            <div>
              <p>Figma files can also be downloaded from our store. These files include the latest Figma features and are synced with the Webflow template.</p>
              <p>Figma files can also be downloaded from our store. These files include the latest Figma features and are synced </p>
              <p>Figma files can also be downloaded from our store. These files include the latest Figma features and are synced with the Webflow template.</p>
            </div>
            <Button className='section-3_trybtn'><span>Try it now</span> <ArrowLeft style={{marginLeft:'1.7rem'}}/></Button>
          </div>
        </div>
        <div className='section-3_chartdiv'>
          
          <div className='section-3_outer_div'>
            <div className='section-3_mid_div'>
              <div className='section-3_inner_div'>
                <span className='inner_span'/>
                <div className='top_'>
                  <span>55k <CaretUp style={{transform: 'translate(4px,3px)'}}/></span>
                  <span style={{transform: 'translateY(-12px)'}}>
                    <img src={rounded} alt=''/>
                  </span>
                </div>
                <div className="below_">
                  <img src={chart} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </section>
  )
}

export default Section3