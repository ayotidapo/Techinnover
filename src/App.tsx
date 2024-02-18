import React from 'react';
import bgCheck from './assets/img/Frame10.png';
import davido from './assets/img/davido.png';
import darkGirl from './assets/img/darkgirl.png';
import boys from './assets/img/5boys_.png';
import sec3Image from './assets/img/sec3Img.png';
import rounded from './assets/img/rounded.png';
import chart from './assets/img/chart.png';
import tems from './assets/img/tems.png';
import tems1 from './assets/img/tems1.png';
import tems2 from './assets/img/tems2.png';
import tems3 from './assets/img/tems3.png';
import './App.css';
import { ReactComponent as ArrowLeft } from './assets/img/arrowLeft.svg';
import { ReactComponent as CaretUp } from './assets/img/caret.svg';
import Button from './common/Button';

const App:React.FC = ()=> {
  return (
    <div className="App">
      <div className='top-div'>
        <img src={bgCheck} alt='' className='bg-img'/>
         <section style={{height: '100%'}}>
          <header className='header_'>  
            <h2>LOGO</h2>
            <nav>
              <ul>
                <li>Features</li>
                <li>News</li>
              </ul>
            </nav>
            <div className='header_btn_div'> 
              <Button>Sign up</Button>
              <Button>Log in</Button>
            </div>
            
          </header>
          <div className='jumbotron_'>
            <div className='jumbotron_left_div'>
              <h1>AN INNOVATIVE PLATFORM THAT <span>SUPPORTS ARTISTS.</span></h1>
              <p>Figma files can also be downloaded from our store. These files include the latest Figma features and are </p>
              <Button className='try_now_btn'><span>Try it now</span> <ArrowLeft/></Button>
              <div className='girl-img-div'>
                <img src={darkGirl} alt='darkgirl'/>
              </div>            
            </div>
            <div className='jumbotron_right_div'>
              <img src={davido} alt='davido'/>            
            </div>
          </div>
        </section>
        
      </div>
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
     <section className='section-3'>
        <div className='section-3__desc' >
          <div className='section-3__descImg_Box'>
            <img src={sec3Image} alt=''/>
          </div>
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
      <section className='section-4'>
        <img src={tems} alt=""/>
        <div className="section-4_gradient"> 
          <section className='section-4_desc'>
            <div className="section-4_desc__wrapper">
              <h3>‘‘WE HELP ARTISTS FIND THEIR FANS’’</h3>
              <p>Figma files can also be downloaded from our store. These files include the latest Figma features and are synced </p>
            </div>
            <div className="section-4_img__wrapper">
              <img src={tems1} alt=""/>
              <img src={tems2} alt=""/>
              <img src={tems3} alt=""/>
            </div>
          </section>
        </div>
      </section>
  
    </div>
  );
}

export default App;
