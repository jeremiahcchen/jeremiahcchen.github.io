import React from 'react'

import {
    SkillsContainer,
    SkillsH1,
    SkillsWrapper,
    SkillsRow,
    Column1,
    Header,
    SkillsBar,
    InsideBar1,
    InsideBar2,
    InsideBar3,
    InsideBar4
} from './SkillsElements'

const Skills = () => {
    return (
        <>
            <SkillsContainer id='skills'>
                <SkillsWrapper>
                    <SkillsRow id='skillsrow'>
                        <SkillsH1>My Skills</SkillsH1>
                        <Column1>
                            <Header>C++</Header>
                            <SkillsBar>
                                <InsideBar1>90%</InsideBar1>
                            </SkillsBar>
                            <Header>JavaScript</Header>
                            <SkillsBar>
                                <InsideBar2>70%</InsideBar2>
                            </SkillsBar>
                            <Header>Python</Header>
                            <SkillsBar>
                                <InsideBar3>60%</InsideBar3>
                            </SkillsBar>
                            <Header>React</Header>
                            <SkillsBar>
                                <InsideBar4>60%</InsideBar4>
                            </SkillsBar>
                        </Column1>

                    </SkillsRow>
                </SkillsWrapper>
            </SkillsContainer>
        </>
    )
}

export default Skills
