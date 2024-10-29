import { Link, NavLink } from 'react-router-dom';

import './styles.css';


const Header = ({ routes }) => {

    return (
        <div className="header">
            <Link to="/">
                <h1 className='title'>Spilum<span className='titleSecond'>.Net</span></h1>
            </Link>
            <nav>
                <ul>
                    {routes.map((route, index) => ( !route.navbar ? '' :
                        <li>
                            <NavLink 
                                key={index}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                to={route.path}>{route.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;