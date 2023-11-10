// eslint-disable-next-line no-unused-vars
import React from 'react';

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Tienda Fundacion La Libertad',
      description: 'E-commerce built in WooCommerce for La Libertad Foundation.',
      image: './assets/images/la-libertad.png',
      link: 'https://dev-test-la-libertad.pantheonsite.io/',
    }
  ];

  return (
    <div className="container-fluid my-5">
      <h2 className="text-center text-white mb-4">Projects</h2>
      <div className="row justify-content-center">
        {projects.map((project) => (
          <div key={project.id} className="col-md-8 mb-4">
            <div className="card" style={{ backgroundColor: '#2c2c2c', color: 'white' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid h-100 object-fit-contain"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      See project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

// Manejar estilos dentro
//Pasarlos al css, estilos por componente