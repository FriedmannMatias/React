import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="navbar-container">
            <h1 className="logo">Sneak Pro</h1>
            <div className="container-links">
                <button>Hombre</button>
                <button>Mujer</button>
                <button>Unisex</button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar