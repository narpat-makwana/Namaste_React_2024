import logo from '../Images/logo.jpeg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
      <div className="header">
        <img className="logo" src={logo} />
  
        <div className="nav-item">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;