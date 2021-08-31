import React/*, {useState}*/ from 'react'
import Video from '../../videos/video.mp4'
// import { Button } from '../ButtonElements'

import {
    HeroContainer,
    HeroBackground,
    VideoBackground,
    HeroContent,
    HeroH1,
    HeroP,
    // HeroButtonWrapper,
    // ArrowForward,
    // ArrowRight
} from './HeroElements'


const HeroSection = () => {
    // const [hover, setHover] = useState(false)

    // const onHover = () => {
    //     setHover(!hover)
    // }

    return (
        <HeroContainer id='home'>
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBackground>
            <HeroContent>
                <HeroH1>Jeremiah Chen</HeroH1>
                <HeroP>I am an aspiring software engineer and a self-motivated learner.</HeroP>
                {/* <HeroButtonWrapper>
                    <Button to='signup' onMouseEnter = {onHover} 
                    onMouseLeave={onHover}
                    primary = 'true'
                    dark = 'true'
                    >
                        Test Button {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroButtonWrapper> */}
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection
