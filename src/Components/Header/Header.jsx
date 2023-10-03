
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <nav className='navbar'>
            <Link style={{padding:"5px"}} to="/">thisapp</Link>
            <Link style={{padding:"5px"}} to="/about">about</Link>
            <Link style={{padding:"5px"}} to="/contact">contact</Link>
            <Link style={{padding:"5px"}} to="/posts">Post</Link>
            <Link style={{padding:"5px"}} to="/app">app</Link>
            <ActiveLink style={{padding:"5px"}} to="/frinds">friends</ActiveLink>
        </nav>
    );
};

export default Header;