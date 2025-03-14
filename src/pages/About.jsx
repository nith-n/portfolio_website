function About() {
  return (
    <div className="about-container">
      <div className="container content-wrapper">
        <h1>About Me</h1>
        
        <section className="education-section">
          <h2>Education</h2>
          <p>Dalhousie University, Halifax, NS - January 2022 - Graduation in December 2025</p>
          <p>Co-op BACS - Bachelor of Applied Computer Science</p>
        </section>

        <section className="experience-section">
          <h2>Work Experience</h2>
          <div className="job">
            <h3>Data Analyst</h3>
            <p>EfficiencyOne, Burnside, Dartmouth, NS - September 2024 – December 2024</p>
          </div>
          
          <div className="job">
            <h3>Data Analyst</h3>
            <p>EfficiencyOne, Burnside, Dartmouth, NS - January 2024 – April 2024</p>
          </div>

          <div className="job">
            <h3>SLEQ Technical Assistant</h3>
            <p>Center for Learning and Teaching, Dalhousie University, Halifax, NS - May 2023 – August 2023</p>
          </div>
        </section>

        <section className="certifications-section">
          <h2>Certifications</h2>
          <div className="certification">
            <h3>IBM Data Science Professional Certificate</h3>
            <p>In progress</p>
            <p>Twelve course certificate series for developing the skills, tools, and portfolio to have a competitive edge in the job market as an entry-level data scientist. Includes certificates in database querying, data visualisation, data analysis, machine learning and generative AI.</p>
          </div>

          <div className="certification">
            <h3>PCEP - Certified Entry-Level Python Programmer</h3>
            <p>Issued - October 2021</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
