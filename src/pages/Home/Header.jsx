import "./Header.css";
import image from "../../assets/logo-2.jpg";
import { Link } from "react-router-dom";

function Header({ className }) {
  return (
    <div className={className}>  
      <div className="icon_style">
        {/* <h2>IT Service Provider</h2> */}
        <Link to="/">
          <img height="80rem" src={image} />
        </Link> 
      </div>
      <div className="navbar-list">
        <ul className="navbar-ul">
          <Link to="/aboutus" className="no-underline">
            {" "}
            <li>About us</li>
          </Link>
    
          <Link to="/services" className="no-underline">
            {" "}
            <li>services</li>
          </Link>
          <Link to="/industries" className="no-underline">
            {" "}
            <li>Industries</li>
          </Link>
          <Link to="/resources" className="no-underline">
            {" "}
            <li>Resources</li>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contactus">
            <li className="navbar-contact">Contact Us</li>
          </Link>
        </ul>
        <div className="hamburger">Icon</div>
      </div>
    </div>
  );
}

export default Header;
