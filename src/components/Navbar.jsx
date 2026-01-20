import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <ul className="nav-links">
          <li>Banker<span>.</span></li>
        </ul>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <div className="socials">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </nav>
  );
};

export default Navbar;
