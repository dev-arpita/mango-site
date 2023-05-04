function Header() {
    return(
        <header className="header">
            <div className="logo">Mangooes</div>
            <nav className="nav">
                <ul className="menu">
                    <li className="menu-item"><a href="">Home</a></li>
                    <li className="menu-item"><a href="">About Us</a></li>
                    <li className="menu-item"><a href="">Benefits</a></li>
                    <li className="menu-item"><a href="">Contact Us</a></li>
                </ul>
                <a className="menu-item btn" href="#">Order Now</a>
            </nav>
        </header>
    )
}
export default Header
