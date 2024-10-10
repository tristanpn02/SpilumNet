import { Link, NavLink } from 'react-router-dom';

import './styles.css';
import spilumLogo from './Spilum-Logo.svg';


const Header = ({ routes }) => {

    return (
        <div className="header">
            <Link to="/">
                <img className='logo' src={spilumLogo} height="60px" alt="" />
            </Link>
            <nav>
                <ul>
                    {routes.map((route, index) => (
                        <li>
                            <NavLink key={index} activeClassName="active" to={route.path}>{route.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;