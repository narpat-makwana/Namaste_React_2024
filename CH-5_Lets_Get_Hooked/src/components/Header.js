import logo from "../Images/logo.jpeg";

const Header = () => {
    return (
      <div className="header">
        <img className="logo" src={logo} />
  
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;