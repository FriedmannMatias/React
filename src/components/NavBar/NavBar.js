import './Navbar.css'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar-container">
            <h1 className="logo">Sneak Pro</h1>
            <div className="container-links">
                <button className="links">Hombre</button>
                <button className="links">Mujer</button>
                <button className="links">Unisex</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar