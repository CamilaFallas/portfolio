// eslint-disable-next-line no-unused-vars
import React from 'react';
import { IoIosOpen } from 'react-icons/io';

const Footer = () => {
  return (
    <div className='footer'>
      <p>
        This Portfolio was built with <a className="link-secondary" target="_blank" rel="noreferrer" href="https://react.dev/">React</a> - <a className="link-secondary" target="_blank" rel="noreferrer" href="https://getbootstrap.com/">Bootstrap</a> - <a className="link-secondary" target="_blank" rel="noreferrer" href="https://www.framer.com/motion/">Framer Motion</a>
      </p>
      <a className="link_custom-color" href="https://github.com/CamilaFallas/portfolio.git" target="_blank" rel="noopener noreferrer">
        Watch Repository <IoIosOpen />
      </a>
    </div>
  );
};

export default Footer;
