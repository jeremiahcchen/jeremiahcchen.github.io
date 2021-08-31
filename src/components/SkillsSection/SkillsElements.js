import styled from 'styled-components'

export const SkillsContainer = styled.div`
    height: 860px;
    text-align: center;
    background: #f9f9f9;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`;

export const SkillsWrapper = styled.div`
    display: flex;
    z-index: 1;
    height: 860px;    //change to fit the SkillsContainer
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;


`;

export const SkillsRow = styled.div`
    display: grid;
    grid-template-columns: 1000px; //repeat(4, 250px)
    grid-template-rows: [row1-start] 25% [row1-end];
    align-items: center;
    grid-template-areas:
        "header1"
        "col1";

`;

export const Column1 = styled.div`

    @media screen and (max-width: 768px) {
        max-width: 768px;
    }

    grid-area: col1;
`;

export const SkillsBar = styled.div`
    box-sizing: border-box;
    width: 100%;
    background-color: #ddd;
    text-align: right;

    @media screen and (max-width: 480px) {
        width: 100%;
    }

`;


//------There has to be a way to make this more efficient-----
export const InsideBar1 = styled.div`
    width: 90%;
    font-weight: bold;
    background-color: #04AA6D;
    padding: 10px 10px;
`;

export const InsideBar2 = styled.div`
    width: 70%;
    font-weight: bold;
    background-color: #04AA6D;
    padding: 10px 10px;
`;

export const InsideBar3 = styled.div`
    width: 60%;
    font-weight: bold;
    background-color: #04AA6D;
    padding: 10px 10px;
`;

export const InsideBar4 = styled.div`
    width: 60%;
    font-weight: bold;
    background-color: #04AA6D;
    padding: 10px 10px;
`;
//-------------------------------------

export const SkillsH1 = styled.h1`
    font-size: 48px;
    color: #010606;
    text-align: center;

    @media screen and (max-width: 480px) {
       font-size: 2rem;
    }
`;

export const Header = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: left;
    padding-top: 10px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
     }
`;
