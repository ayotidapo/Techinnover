import React, {useState} from 'react';
import MobileNav from './components/MobileNav'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Footer from './components/Footer'
import Button from './common/Button';
import bgCheck from './assets/img/Frame10.png';
import davido from './assets/img/davido.png';
import darkGirl from './assets/img/darkgirl.png';
import { ReactComponent as ArrowLeft } from './assets/img/arrowLeft.svg';
import { ReactComponent as Burger } from './assets/img/burger.svg';
import './App.css';

const App: React.FC = ()=> {

const [open , setOpen] = useState<boolean>(false)
console.log(open)
  return (
    <div className="App">
      <MobileNav onClick={()=>setOpen(false)} open={open}/>
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
            <Burger className='burger' onClick={()=> setOpen(true)}/>            
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
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  );
}             

export default App;
