const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <div className="container text-center">

        {/* Store Name */}
        <h5 className="mb-2">🎮 GameGrid</h5>

        {/* Store Description */}
        <p className="mb-2">
          GameGrid is your go-to online store for gaming gear, electronics,
          and accessories designed for gamers and tech enthusiasts.
        </p>

        {/* Contact Information */}
        <p className="mb-2">
          Contact us:<br />
          📧 support@gamegrid.com<br />
          📞 +63 900 123 4567
        </p>

        {/* Social Media Links */}
        <div className="mb-3">
          <a
            href="#"
            className="text-light me-3"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>

          <a
            href="#"
            className="text-light me-3"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>

          <a
            href="#"
            className="text-light"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        </div>

        <small>&copy; 2026 GameGrid. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;