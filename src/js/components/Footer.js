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
                        {/* <a href="/contact/">contact us</a> */}
                        {/* <span className="sep"> | </span> */}
                        {/* <a href="/privacy-policy/">privacy policy</a> */}
                    </div>
                    <h1 className="site-name">empire state building colors</h1>
                    <p className="copyright">&copy; <span id="current-year"></span> rowing guide</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;