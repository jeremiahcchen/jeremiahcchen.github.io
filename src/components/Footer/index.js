import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrapper,
    // FooterLinkContainer,
    // FooterLinksWrapper,
    // FooterLinkItems,
    // FooterLinkTitle,
    // FooterLink,
    SocialMedia,
    SocialMediaWrapper,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    {/* <FooterLinkContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/signin'>Placement</FooterLink>
                                <FooterLink to='/signin'>Placement</FooterLink>
                                <FooterLink to='/signin'>Placement</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinkContainer> */}

                    <SocialMedia>
                        <SocialMediaWrapper>
                            <SocialLogo to='/' onClick={toggleHome}>JC</SocialLogo>
                            <SocialIcons>
                                <SocialIconLink href='https://www.facebook.com/jeremiah.chen.5' target='_blank' aria-label='Facebook'>
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href='https://www.linkedin.com/in/jeremiahcchen/' target='_blank' aria-label='LinkedIn'>
                                    <FaLinkedin/>
                                </SocialIconLink>
                                <SocialIconLink href='https://github.com/jeremiahcchen' target='_blank' aria-label='Github'>
                                    <FaGithub/>
                                </SocialIconLink>

                            </SocialIcons>
                        </SocialMediaWrapper>
                    </SocialMedia>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer
