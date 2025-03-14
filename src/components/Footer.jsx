import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="footer black-background">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h3 className="footer-heading">Contact Me</h3>
            <p>Email: nithin.arunkumar@gmail.com</p>
            <p>LinkedIn: https://www.linkedin.com/in/nithin-nedumparambil-370641230/</p>
            <p>GitHub: https://github.com/nith-n</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="copyright">© 2025 My Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
