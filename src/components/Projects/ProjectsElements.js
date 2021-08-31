import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

export const ProjectsContainer = styled.div`
    height: 875px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`;

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; //column structure could change
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectsCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px;
    max-height: 340px;
    padding: 40px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProjectsIcon = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
    font-size: 1rem;
    text-align: center;
`;

//------------------------------------------------

//-----Extremely Unconventional-----------
// I will change this again later, I just want to see results for now
export const PopUpContent = styled.div`
    background: #010606;
    width: auto;
    height: 620px;
    display: flex;
    align-items: center;
    overflow: hidden;
    opacity: ${(props) => (props.open ? "1" : "0")};
    max-height: ${(props) => (props.open ? "100%" : "0")};
    max-width: ${(props) => (props.open ? "100%" : "0")};
    padding: ${(props) => (props.open ? "15px" : "0 15px")};
    transition: 0.5s ease-in-out;  
    transition-delay: ${(props) => (props.open  ? "0.5s" : "0")};
    transition-delay: ${(props) => (props.open1 ? "0.5s" : "0")};
    transition-delay: ${(props) => (props.open2 ? "0.5s" : "0")};

`;

export const PopUpContent1 = styled.div`
    background: #010606;
    width: auto;
    height: 620px;
    display: flex;
    align-items: center;
    overflow: hidden;
    opacity: ${(props) => (props.open1 ? "1" : "0")};
    max-height: ${(props) => (props.open1 ? "100%" : "0")};
    max-width: ${(props) => (props.open1 ? "100%" : "0")};
    padding: ${(props) => (props.open1 ? "15px" : "0 15px")};
    transition: all 0.5s ease-in-out;   
    transition-delay: ${(props) => (props.open1 ? "0.5s" : "0")};
    transition-delay: ${(props) => (props.open2 ? "0.5s" : "0")};
`;

export const PopUpContent2 = styled.div`
    background: #010606;
    width: auto;
    height: 620px;
    display: flex;
    align-items: center;
    overflow: hidden;
    opacity: ${(props) => (props.open2 ? "1" : "0")};
    max-height: ${(props) => (props.open2 ? "100%" : "0")};
    max-width: ${(props) => (props.open2 ? "100%" : "0")};
    padding: ${(props) => (props.open2 ? "15px" : "0 15px")};
    transition: all 0.5s ease-in-out;   
    transition-delay: ${(props) => (props.open1 ? "0.5s" : "0")};
    transition-delay: ${(props) => (props.open2 ? "0.5s" : "0")};
`;

//--------------------------------------------------------

export const ProjectRow = styled.div`
    display: grid;
    width: 100%;
    height: 550px;
    grid-template-columns: [col1] 40% [col2] 60%;
    align-items: center;
    grid-template-areas:
        "col1 col2";

    @media screen and (max-width: 768px){
        height: 1000px;
    }
`;

export const Column1 = styled.div`  

    @media screen and (max-width: 768px) {
        max-width: 768px;
    }

    grid-area: col1;
`;

export const Column2 = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
        max-width: 768px;
    }

    grid-area: col2;
`;

export const ImgWrap = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
`;

export const Img = styled.img`
    width: 75%;
    height: 75%
    padding-right: 0;
    border-radius: 50%;
`;

export const TextWrapper = styled.div`
    background: #fff;
    width: 800px;
    height: 500px;
    border-radius: 15%;

`;

export const Heading = styled.h1`
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    padding: 15px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    // padding: 20px;
    margin-right: 100px;
    margin-left: 100px;
    max-width: 600px;
    word-wrap: break-word;
    font-size: 20px;
    font-weight: 200;
    line-height: 26px;
`;

export const ButtonIcon = styled.div`
    // position: absolute;
    top: 1.2rem;
    right: 1rem;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Button = styled.a`
    font-size: 20px;
    text-decoration: none;
    padding: 10px;
    margin-top: 125px;
    margin-right: 250px;
    margin-left: 250px;
    margin-bottom: 50px;
    
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }

`;
