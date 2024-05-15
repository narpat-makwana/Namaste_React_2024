import logo from '../Images/logo.jpeg';
import { Link } from 'react-router-dom';
import useOnlineStatus from "./useOnlineStatus";
const Header = () => {

  const onlineStatus = useOnlineStatus();
    return (
      <div className="">
        <img className="w-40 bg-black" src={logo} />
  
        <div className="">
          <ul>
            <li className='bg-black'>Status: {onlineStatus?"✅":"⭕"}</li>
            <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }} >Home</Link></li>
            <li><Link to="/about" style={{ textDecoration: 'none', color: 'black' }} >About</Link></li>
            <li><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }} >Contact Us</Link></li>
            <li><Link to="/grocery" style={{ textDecoration: 'none', color: 'black' }} >Grocery</Link></li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;