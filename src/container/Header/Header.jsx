import React from 'react';

import './Header.css';
import {images} from '../../constants'
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id = "home">
    <div className='app__wrapper_info'>
      <SubHeading title = "Chase the new flavour"/>
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Fine dining offers a symphony of culinary artistry, blending exquisite flavors with impeccable presentation. Every detail, from the ambiance to the service, is meticulously crafted to elevate the dining experience. It's a celebration of gastronomy where every bite is an indulgence, leaving a lasting impression of refined elegance and culinary mastery.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src= {images.welcome} alt="cusine" />
    </div>
  </div>
);

export default Header;
