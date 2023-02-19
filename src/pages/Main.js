import React from 'react';
import BGConfetti from '../assets/image/conf1.gif';

import HiImage from '../assets/image/hi1.gif';
import FirstMeet from '../assets/image/firstmeet.png';
import Image1 from '../assets/image/1.png';
import angel from '../assets/image/angel.jpeg';
import anglefly from '../assets/image/angelfly.jpg';
import confetti from '../assets/image/conf2.gif';

import baloon from '../assets/image/hbdy-bg.png';

const Main = () => {
  return (
    <div id='fullpage'>
      <div className='welcome-section  section'>
        <div
          className='confetti-top-bg'
          style={{ backgroundImage: `url(${BGConfetti})` }}>
          <h3>Haiii !</h3>
          <div className='row'>
            <div className='col-sm-12 text-center'>
              <img src={anglefly} alt='' />
              <h6>இனிய பிறந்த நாள் வாழ்த்துக்கள்...🦋💗</h6>
            </div>
          </div>
        </div>
      </div>
      <div
        className='first-section card section'
        style={{ backgroundImage: `url(${confetti})` }}>
        <div className='card-body'>
          <div className='row'>
            {/* <div className='col-sm-12 text-center'>
            <h3> முதல் சந்திப்பு </h3>
          </div> */}
            <div className='col-sm-12 col-lg-12 '>
              <div className='col-sm-12 text-center kavithai-sec'>
                <img
                  src={baloon}
                  className='img img-responsive kavithai_image'
                  alt=''
                />
                <p className='kavithai'>
                  சிறகிருந்தும் பறக்க முடியாத பட்டாம் பூச்சி உன் விழிகள் !
                  <br />
                  கன்னம் சிவக்கும் வெட்கம் வெட்கத்தை உடைக்கும் சிரிப்பு <br />
                  உன்னை ஓவியமாய் வரைய எழுதுகோல் எடுத்தவன் <br /> கவிதை வடித்து
                  கலைஞனாக மாறிவிட்டான்...
                </p>
                <img className='angel' src={angel} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='second-section card section'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-sm-12 text-center'>
              <img src={Image1} alt='' className='img img-responsive' />
            </div>
      
            <div className='col-sm-12'>
              <p>dailoage</p>
              <p>
                <b>dailoage</b>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Main;
