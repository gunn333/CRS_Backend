import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {

    const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return ( 

    
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">

      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mybooking">My Bookings</Link>
        </li>
      </ul>

      


    {!user && (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      </ul>
    )}

    {user && (

      

      <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {user.email}
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to="/profile">My Profile</Link>
              <button  onClick={handleClick} className="dropdown-item" to="/">Sign Out</button>
            </div>
          </li>
        </ul>

    )}

    </div>
  </nav>

   );
}
 
export default Navbar;

