import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
                height: (scrollTop > 100 ? "5em" : "10em" )
            }}>

            <div className="logo">
                <h1>empire state building colors</h1>
            </div>

            <nav className="nav-bar">
                <div className="nav-links">
                    <Link to="/">home</Link>
                </div>
                <div className="nav-links">
                    <Link to="/about">about</Link>
                </div>
                <div className="nav-links">
                    <Link to="/contact">contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;