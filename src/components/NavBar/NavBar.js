import './NavBar.css'
import logo from "../NavBar/jdm-maniac.png"
import CartWidget from "../CartWidget/CartWidgets"

const NavBar = () => {
    return(
        <nav className='NavBar'>
            <div className='logo'>
                <img src={logo} className='jdm-maniac' />
            </div>
            <div className='buttons'>
                <a className='button-autos' href="">Automoviles</a>
                <a className='button-Modificaciones' href="">Modificaciones</a>
                <a className='button-Accesorios' href="">Accesorios</a>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;