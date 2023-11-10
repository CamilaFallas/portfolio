// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content text-center">
        <img src="/assets/images/profilePhoto.jpg" alt="Camila Fallas" className="img-custome" />
        <div>
        <a href='https://www.linkedin.com/in/camila-fallas-naranjo-16a8901a8/' target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="custom-icon" />
        </a>
        <a href='https://github.com/CamilaFallas' target="_blank" rel="noopener noreferrer">
        <FaGithub className="custom-icon" />
        </a>
        </div>
        <a href="./camila-fallas__cv.pdf" download>
          <button className="btn btn-secondary">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
