import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <nav className="nav-bar">
    <h1 className="header-title">Bookstore CMS</h1>
    <ul className="lists">
      <li className="list-items">
        <NavLink className="navigation-link" to="/">BOOKS</NavLink>
      </li>
      <span />
      <li className="list-items">
        <NavLink className="navigation-link" to="/categories">CATEGORIES</NavLink>
      </li>
      <span />
    </ul>
    <div className="userIcon"><FaUser /></div>
  </nav>
);

export default Navbar;
