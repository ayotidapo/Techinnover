import React from 'react'

import './style.css'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
        <div className='footer_top_wrapper'>
          <div className="footer_left_div">
            <h4>SHORT LINE ABOUT US THREE WORDS HERE</h4>
            <p>Short sentence here</p>
          </div>
          <section className="footer_connect_wrapper">
            <h4 className="footer_connect">CONNECT<br/>WITH<br/> US</h4>
            <nav>
              <ul>
                <li>Twitter</li>
                <li>Discord</li>
                <li>Instagram</li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li>Cookies</li>
                <li>Licenses</li>
                <li>Contact</li>
              </ul>
            </nav>
            </section>
        </div>
        <div className='footer_bottom_wrapper'>
          <div className='span_group'>
            <span>2022</span>
            <span>•</span>
            <span>PLATFORM</span>
            <span>2022</span>
          </div>
          <div>
            <span>TERMS &amp; CONDITIONS</span>
            <span className='footer_policy' >PRIVACY POLICY</span>
          </div>
        </div>
      </footer>
  
  )
}

export default Footer