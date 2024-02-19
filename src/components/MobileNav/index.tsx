import React from 'react'
import Button from '../../common/Button'
import './style.css'


interface Props {
  open: boolean;
  onClick: () => void;
}

const MobileNav:React.FC<Props> = (props) => {
  const {open, onClick: onClickFn} = props;
  console.log({open})
  return (
    <section className={`overlay ${open ? 'open' :' '}`}>

      <div className='wrapper'>
        <div className='inner_wrapper'>
            <header>
              <div>
                <Button className="closebtn" onClick={onClickFn}>&times;</Button>
              </div>
              <nav>
                <ul>
                  <li>Features</li>
                  <li>News</li>
                </ul>
              </nav>
              <div className='header_btn_div'> 
                <Button className='mobilebtn'>Sign up</Button>
                <Button className='mobilebtn'>Log in</Button>
              </div>
            </header>
          </div>
      </div>
    </section>
  )
}

export default MobileNav