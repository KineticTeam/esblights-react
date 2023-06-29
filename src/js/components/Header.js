function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>Empire State Building Colors</h1>
            </div>

            <nav className="nav-bar">
                <div className="nav-links">
                    <a href="/">Home</a>
                </div>
                <div className="nav-links">
                    <a href="/about">About</a>
                </div>
                <div className="nav-links">
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;