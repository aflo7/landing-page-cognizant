// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="top-nav">
        <div className="top-nav-inner">
          <div>Careers</div>
          <div>News</div>
          <div>Events</div>
          <div>Investors</div>
        </div>
      </div>
      <nav>
        <div>
          <img
            src="https://cognizant.scene7.com/is/content/cognizant/COG-Logo-2022-1?fmt=png-alpha"
            height="50px"
          />
          <div className='right-nav-btns'>
            <div>Industries</div>
            <div>Services</div>
            <div>Insights</div>
            <div>About</div>
          </div>
        </div>
      </nav>
      <div
        style={{
          backgroundColor: 'rgb(0,7,61)',
          color: 'white',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '1000px',
            padding: '10px 10px',
            alignItems: 'center',
            fontSize: '1.2rem'
          }}
        >
          <div>Intuition engineered</div>
          <div className="contact-btn">
            <SmsOutlinedIcon />
            Contact
          </div>
        </div>
      </div>
      <div className="nebula">
        <div style={{ width: '1000px' }}>
          <div style={{ color: 'white', width: '500px' }}>
            <div className="h2">Tomorrow's edge is intuition engineered.</div>
            <p style={{ fontSize: '1.2rem' }}>
              We're helping businesses predict customer behavior, sense market
              shifts and stay positioned for disruption, so they can respong in
              an instant. We call it intuition engineered.
            </p>
            <div className="watch-video-btn">
              <div>Watch video</div>

              <div>
                <ArrowForwardIosIcon style={{ fontSize: '1.2rem' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: 'rgb(0,7,61)',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          padding: '10px'
        }}
      >
        <div style={{ display: 'flex', gap: '20px', width: '1000px' }}>
          <div>Case studies</div>
          <div>Services</div>
          <div>Contact us</div>
        </div>
      </div>
    </>
  );
}

export default App;
