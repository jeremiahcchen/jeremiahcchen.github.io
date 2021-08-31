import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import Icon1 from '../../images/Chess.jpg'
import Icon1_1 from '../../images/Chess_1.jpg'
import Icon2 from '../../images/Jeremiah_Profile_1_Zoom.JPG'
import Icon2_1 from '../../images/react_img.jpg'
import Icon3 from '../../images/boardgame.jpg'
import Icon3_1 from '../../images/boardgame1.jpg'

import {
    ProjectsContainer,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    ProjectsH2,
    ProjectsP,
    PopUpContent,
    PopUpContent1,
    PopUpContent2,
    ProjectRow,
    Column1,
    Column2,
    ImgWrap,
    Img,
    Heading,
    TextWrapper,
    Subtitle,
    CloseIcon,
    ButtonIcon,
    Button
} from './ProjectsElements'

const Projects = () => {

    //------Extremely unconventional-------
    // I will change this later, I just want something to produce results right now
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

    const toggle = () => {
        setOpen(!open);
        setOpen1(false);
        setOpen2(false);
    };

    const toggle1 = () => {
        setOpen1(!open1);
        setOpen(false);
        setOpen2(false);
    };
    
    const toggle2 = () => {
        setOpen2(!open2);
        setOpen(false);
        setOpen1(false);
    };

    return (
        <>
            <ProjectsContainer id='projects'>
                <ProjectsH1>Projects</ProjectsH1>
                <ProjectsWrapper>
                    <ProjectsCard onClick={toggle}>
                        <ProjectsIcon src={Icon1}/>
                        <ProjectsH2>Chess Simulation</ProjectsH2>
                        <ProjectsP>
                            Let's play some Chess!
                        </ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard onClick={toggle1}>
                        <ProjectsIcon src={Icon2}/>
                        <ProjectsH2>Portfolio Website</ProjectsH2>
                        <ProjectsP>You're checking it out already :D</ProjectsP>
                    </ProjectsCard>
                    <ProjectsCard onClick={toggle2}>
                        <ProjectsIcon src={Icon3}/>
                        <ProjectsH2>SiGaL-CEL Website</ProjectsH2>
                        <ProjectsP>Hackathon inspired Board game project</ProjectsP>
                    </ProjectsCard>
                </ProjectsWrapper>
            </ProjectsContainer>

            <PopUpContent open={open}>
                <ProjectRow>
                    <Column1>
                        <ImgWrap>
                            <Img src={Icon1_1}/>
                        </ImgWrap>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Heading>Chess Simulation</Heading>
                            <Subtitle>
                                My love for the game of chess prompted me to create a self made chess board simulation using
                                SFML for its GUI interface. 
                                <br/><br/> 
                                This project predominately uses C++ as its game logic.
                            </Subtitle>
                            <Button href='https://github.com/jeremiahcchen/Chess-Simulator' target='_blank' aria-label='Github'> 
                                <FaGithub/>  Check out my Code
                            </Button>
                        </TextWrapper>
                    </Column2>
                </ProjectRow>
                <ButtonIcon>
                    <CloseIcon onClick={toggle}/>
                </ButtonIcon>
            </PopUpContent>

            <PopUpContent1 open1={open1}>
                <ProjectRow>
                    <Column1>
                        <ImgWrap>
                            <Img src={Icon2_1}/>
                        </ImgWrap>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Heading>Portfolio Website</Heading>
                            <Subtitle>
                                I created a single page react website portfolio that can display my coding practices
                                with the help of React and styled-components for CSS. I self-taught myself React and
                                this is my first React project. I learned the usefulness of React Hooks and the
                                intricate ways to style the website with style-components. 
                            </Subtitle>
                            <Button href='https://github.com/jeremiahcchen/' target='_blank' aria-label='Github'> 
                                <FaGithub/>  Not Done
                            </Button>
                        </TextWrapper>
                    </Column2>
                </ProjectRow>
                <ButtonIcon>
                    <CloseIcon onClick={toggle1}/>
                </ButtonIcon>
            </PopUpContent1>

            <PopUpContent2 open2={open2}>
                <ProjectRow>
                    <Column1>
                        <ImgWrap>
                            <Img src={Icon3_1}/>
                        </ImgWrap>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Heading>SiGaL-CEL Website</Heading>
                            <Subtitle>
                                Developed a website with a team that uses Elixir and JavaScript.
                                The purpose of this website is provide an area where people can come together
                                to play whichever card game they want with our built in APIs and code interpreter.
                                This project is not done but here is the code to see how far we have
                                progressed.
                            </Subtitle>
                            <Button href='https://github.com/Vadim-Pelyushenko/SiGaL_CEL' target='_blank' aria-label='Github'> 
                                <FaGithub/>  Check out our Code
                            </Button>
                        </TextWrapper>
                    </Column2>
                </ProjectRow>
                <ButtonIcon>
                    <CloseIcon onClick={toggle2}/>
                </ButtonIcon>
            </PopUpContent2>
        </>
    )
}

export default Projects
