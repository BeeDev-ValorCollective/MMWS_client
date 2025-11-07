
import './Header.css'


import Nav from './NavBar/NavBar'

import HeaderLogo from '../../assets/MMWS_Logo_Nav-Bar.png'

export default function Header() {


    return(
        <>
        <header>
            <img src={ HeaderLogo } alt="MMWS Logo" />
            <Nav />
        </header>
        </>
    )
}