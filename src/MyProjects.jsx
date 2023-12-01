import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWordpress, FaFigma, FaJs } from 'react-icons/fa';

const MyProjects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '50% 0px',
  });

  const projects = [
    {
      id: 1,
      title: 'Tienda Fundacion La Libertad',
      description: 'E-commerce built in WooCommerce for La Libertad Foundation.',
      image: './assets/images/la-libertad.png',
      link: 'https://dev-test-la-libertad.pantheonsite.io/',
      techIcons: [<FaWordpress key="wordpress" size={24} />],
    },
    {
      id: 2,
      title: 'From the idea in Figma to reality',
      description: 'A Figma Project for a fictitious vinyl store',
      image: './assets/images/back-to-the-future.png',
      link: 'https://www.figma.com/file/LrSUk68FUwdtJV3emSMwK4/BACK-TO-THE-FUTURE-VYNIL?type=design&node-id=0%3A1&mode=design&t=ZRjmFSBAK5s2BLF8-1',
      githubLink: 'https://github.com/your-username/back-to-the-future-repo',
      techIcons: [<FaFigma key="figma" size={24} />],
    },
    {
      id: 3,
      title: 'The perfect plant for you',
      description: 'A vanilla JavaScript project connected to an API to recommend the perfect plant for you based on your necessities',
      image: './assets/images/plants.png',
      githubLink: 'https://github.com/CamilaFallas/plants',
      techIcons: [<FaJs key="javascript" size={24} />],
    },
  ];

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="container-fluid my-5">
      <h2 className="text-center text-white mb-4">Projects</h2>
      <div className="row justify-content-center">
        {projects.map((project) => (
          <div key={project.id} className="col-md-8 mb-4">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
              }}
              transition={{ duration: 0.5 }}
              className="card"
              style={{ backgroundColor: '#2c2c2c', color: 'white' }}
            >
              <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid h-100 object-fit-contain mx-auto"
                    style={{ maxWidth: '100%', maxHeight: '300px' }}
                  />
                </div>
                <div className="col-md-8 d-flex flex-column justify-content-between">
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="d-flex flex-wrap mb-2">
                      {project.techIcons.map((icon, index) => (
                        <span key={index} className="mx-2">
                          {icon}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-center">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary mx-2"
                      whileHover={{
                        boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      See project
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
