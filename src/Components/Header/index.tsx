import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const Header = ({ routes }) => {
    const location = useLocation();

    return (
        <div className="header">
            <Link to="/">
                <h2>Spilum.Net</h2>
            </Link>
            <div className="dropdown">
                <h2 className="location">
                    {location.pathname === "/" ? "/home" : location.pathname}
                </h2>
                <div className="dropdown-content">
                    {routes.map((route, index) => (
                        <Link key={index} to={route.path}>
                            {route.title.toLowerCase()}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;
