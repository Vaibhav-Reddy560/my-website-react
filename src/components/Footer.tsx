import LocationMap from './LocationMap'; // Import the new map component

const Footer = () => {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-info">
          <h4>Tech For Good Summit 2025</h4>
          <p>B.M.S. College of Engineering, Bengaluru</p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <p className="copyright">&copy; 2025 IEEE Computer Society. All Rights Reserved.</p>
        </div>
        <div className="footer-map">
          <LocationMap />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
