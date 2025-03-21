import { useEffect, useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const response = await fetch('/.netlify/functions/getProjects');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        setProjects(data);
        setError(null);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="projects-container">
      <div className="container content-wrapper">
        <h1>Projects</h1>
        {projects.map(project => (
          <section key={project.id} className="project">
            <h2>{project.title}</h2>
            <p className="project-date">{project.date}</p>
            <ul className="project-details">
              {project.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Projects;
