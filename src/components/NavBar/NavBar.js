import './NavBar.css'
import logo from "../NavBar/jdm-maniac.png"

const NavBar = () => {
    return(
        <nav className='NavBar'>
            <div className='logo'>
                <img src={logo} className='jdm-maniac' />
            </div>
            <div className='buttons'>
                <a className='button-autos' href="">Autos</a>
                <a className='button-volantes' href="">Volantes</a>
                <a className='button-ruedas' href="">Ruedas</a>
            </div>
        </nav>
    )
}

export default NavBar