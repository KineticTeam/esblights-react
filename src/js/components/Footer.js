import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-row"> 
                <div className="socials-footer-stuff">
                    <div className="socials">
                        <a href="https://www.github.com/JordynLewi5" target="_blank">
                            <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" style={{width:70}} className="github-icon" />
                        </a>
                    </div>
                </div>
                <div className="footer-stuff">
                    <div className="contact">
                        <Link to="/contact/">contact us</Link>
                        <span className="sep"> | </span>
                        <Link to="/disclaimer/">disclaimer</Link>
                    </div>
                    {/* <h1 className="site-name">empire state building colors</h1> */}
                    <p className="copyright">&copy; <span id="current-year"></span> Jordyn Lewis</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;