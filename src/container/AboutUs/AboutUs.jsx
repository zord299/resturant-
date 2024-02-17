import React from 'react';

import './AboutUs.css';
import {images} from '../../constants'

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__centre section__padding' id='about'>
    

    <div className='app__aboutus-content flex__centre'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src= {images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>Our mission: crafting exceptional experiences. We strive for excellence in service, quality, and innovation. Join us on our journey</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>

    <div className='app__aboutus-content_knife flex__centre'>
      <img src={images.knife} alt="about_knife" />
    </div>

    <div className='app__aboutus-content flex__centre'>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src= {images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>Our mission: crafting exceptional experiences. We strive for excellence in service, quality, and innovation. Join us on our journey</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
