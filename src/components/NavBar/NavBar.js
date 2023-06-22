import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h1>Sneak Pro</h1>
            <div>
                <button>Hombre</button>
                <button>Mujer</button>
                <button>Unisex</button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar