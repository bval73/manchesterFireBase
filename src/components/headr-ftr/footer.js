import React from 'react';
import { CityLogo } from '../utils/icons';

const Footer = () => {
  return (
    <footer className='bck_blue'>
      <div className='footer_logo'>
      <CityLogo
                link={true}
                linkTo='/'
                height='70px'
                width='70px'
              />
      </div>
      <div>
        Manchester city 2020. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;