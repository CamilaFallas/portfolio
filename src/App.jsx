// eslint-disable-next-line no-unused-vars
import React from 'react';
import Sidebar from './Sidebar';
import AboutMe from './AboutMe';
import Tools from './Tools';
import MyProjects from './MyProjects'
import ContactForm from './ContacForm';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'; 


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <div className="main-content__margin">
        <AboutMe />
        <Tools />
        <MyProjects />
        <ContactForm />
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
