import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from 'js/../../public/white-icon.png';

function Header() {
    const [scrollTop, setScrollTop] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header
            className="header"
            style={{
                // opacity: scrollTop > 100 ? 0.5 : 1,
                height: scrollTop > 100 ? "7.5em" : "7.5em",
            }}
        >
            <Link to="/" rel="noreferrer" className="logo">
                <img className="logo-img" src={logo} alt="Website Logo" />
            </Link>

            <nav className="nav-bar">
                {windowWidth >= 500 && (
                    <div className="nav-links">
                        <Link to="/" rel="noreferrer">
                            home
                        </Link>
                    </div>
                )}

                {window.location.pathname === "/" ? (
                    <div className="nav-links">
                        <a href="/#api">api</a>
                    </div>
                ) : (
                    <div className="nav-links">
                        <Link to="/#api">api</Link>
                    </div>
                )}

                <div className="nav-links">
                    <Link to="/about" rel="noreferrer">
                        about
                    </Link>
                </div>
                <div className="nav-links">
                    <a href="https://www.kinetic.com/contact-us/">contact</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
