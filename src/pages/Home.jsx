function Home() {
  return (
    <div className="home-container">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src="/profile_photo.jpg" alt="Profile" className="profile-image" />
          </div>
          <div className="col-md-8">
            <h1>Welcome to My Portfolio</h1>
            <p className="lead">Hi, I'm Nithin Nedumparambil</p>
            <p className="description">
              I am an Applied Computer Science student interested in leveraging data to solve real world problems. 
              Interested in data science and data analytics roles after graduation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
