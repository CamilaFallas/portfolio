import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="row d-flex align-items-center">
      <motion.div className="col-md-4">
          <motion.img
            src="/assets/images/hero-ilustration.png"
            className="img-fluid"
            animate={{ x: [-20, 20, -20], y: [0, 0, 0], transition: { duration: 2, repeat: Infinity } }}
          />
        </motion.div>
        <motion.div className="col-md-6">
          <p>¡Hola! 👋 I'm Camila, a front-end development student hailing from the beautiful country of Costa Rica 🌴.</p>
        </motion.div>
      </motion.div>
      <motion.h2>About Me</motion.h2>
      <motion.p>
        Currently sharpening my skills at Centro de Tecnología y Artes Visuales (CETAV), I'm on a mission to create captivating web experiences.
        With a passion for coding and an eye for design, I dive deep into the realms of HTML, CSS, and JavaScript. Collaborative by nature, I thrive in dynamic environments where innovation and creativity converge.
        Staying at the forefront of industry trends, I'm always eager to learn and adapt. From mastering the latest frameworks to exploring emerging technologies.
        If you're looking for a motivated front-end developer with a touch of Costa Rican flair, let's connect! Together, we can turn ideas into remarkable digital journeys. ¡Pura vida! 🌟
      </motion.p>
    </motion.section>
  );
};

export default AboutMe;
