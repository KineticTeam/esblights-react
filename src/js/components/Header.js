import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from 'js/../../public/white-icon.png';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
      const handleScroll = (event) => {
        setScrollTop(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <header className="header" style={{
                opacity: (scrollTop > 100 ? 0.8 : 1 ), 
                height: (scrollTop > 100 ? "3.75em" : "7.5em" )
            }}>

            <Link to="/" rel="noreferrer" className="logo">
                <img className="logo-img" src={logo} alt="Website Logo"/>
            </Link>

            <nav className="nav-bar">
                <div className="nav-links">
                    <Link to="/" rel="noreferrer">home</Link>
                </div>

                {window.location.pathname === "/" ?
                    <div className="nav-links">
                        <a href="/#esb-lights-api">api</a>
                    </div>
                :
                    <div className="nav-links">
                        <Link to="/#esb-lights-api">api</Link>
                    </div>
                }
                
                <div className="nav-links">
                    <Link to="/about" rel="noreferrer">about</Link>
                </div>
                <div className="nav-links">
                    <a href="https://www.kinetic.com/contact-us/">contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;