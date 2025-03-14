function Projects() {
  return (
    <div className="projects-container">
      <div className="container content-wrapper">
        <h1>Projects</h1>
        
        <section className="project">
          <h2>Exploratory Data Analysis of Aircraft Wildlife Collisions</h2>
          <p className="project-date">August 25, 2023</p>
          <ul className="project-details">
            <li>Conducted an in-depth data analysis of American aircraft collisions with birds with the aim of finding information that might help reduce these collisions.</li>
            <li>Performed data cleaning to handle any missing values, duplicate values, and outliers.</li>
            <li>Used Seaborn and matplotlib to create visual representations of data. This allowed for easy identification of any correlations.</li>
            <li>Documented the analytical process thoroughly and brainstormed possible solutions to reducing these accidents from the insights gained from the analysis.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Projects;
