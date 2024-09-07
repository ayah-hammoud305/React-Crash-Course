import { Link } from "react-router-dom"

function Nav() {
    return (
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/users/ayah'>Ayah</Link>
        <Link to='/users/luna'>Luna</Link>
        <Link to='/users/casper'>Casper</Link>
      </nav>
    )
}

export default Nav;