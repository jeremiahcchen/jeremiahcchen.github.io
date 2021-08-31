import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu,
    NavItem, 
    NavLinks,
    // NavButton,
    // NavButtonLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>JC</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {/* <NavItem>
                            <NavLinks to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Home</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks to='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skills'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* <NavButton>
                        <NavButtonLink to ="/signin">Sign In</NavButtonLink>
                    </NavButton> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

