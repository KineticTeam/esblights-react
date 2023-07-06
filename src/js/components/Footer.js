import { Link } from 'react-router-dom';
import github_icon from 'js/../../public/github-icon-white-6.jpg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-row"> 
                <div className="socials-footer-stuff">
                    <div className="socials">
                        <a href="https://www.github.com/JordynLewi5" rel="noreferrer" target="_blank">
                            <img src={github_icon} style={{width:70}} alt="GitHub Logo" className="github-icon" />
                        </a>
                    </div>
                </div>
                <div className="footer-stuff">
                    <div className="contact">
                        <Link to="/contact/" rel="noreferrer">contact us</Link>
                        <span className="sep"> | </span>
                        <Link to="/disclaimer/" rel="noreferrer">disclaimer</Link>
                    </div>
                    {/* <h1 className="site-name">empire state building lights</h1> */}
                    <p className="copyright">&copy; <span id="current-year">{new Date().getFullYear()}</span> </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;