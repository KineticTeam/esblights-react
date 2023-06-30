import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from 'js/../../public/white-icon.png';

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
                opacity: (scrollTop > 100 ? 0.4 : 1 ), 
                height: (scrollTop > 100 ? "5em" : "9em" )
            }}>

            <div className="logo">
                <img className="logo-img" src={logo} alt="Website Logo"/>
            </div>

            <nav className="nav-bar">
                <div className="nav-links">
                    <Link to="/">HOME</Link>
                </div>
                <div className="nav-links">
                    <Link to="/about">ABOUT</Link>
                </div>
                <div className="nav-links">
                    <Link to="/contact">CONTACT</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;