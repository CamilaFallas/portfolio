// eslint-disable-next-line no-unused-vars
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Footer = () => {
  return (
    <div className='footer'>
      <p>
        This Portfolio was built with <a className="link-secondary" target="_blank" rel="noreferrer" href="https://react.dev/">React</a> - <a className="link-secondary" target="_blank" rel="noreferrer" href="https://getbootstrap.com/">Bootstrap</a> - <a className="link-secondary" target="_blank" rel="noreferrer" href="https://www.framer.com/motion/">Framer Motion</a>
      </p>
      <a className="link-secondary" href="https://github.com/CamilaFallas/portfolio.git" target="_blank" rel="noopener noreferrer">
        Watch Repository <IoIosArrowForward />
      </a>
    </div>
  );
};

export default Footer;
