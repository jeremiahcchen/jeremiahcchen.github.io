import styled from 'styled-components'
import { css } from 'styled-components'

// export const ContactContainer = styled.div`
//     background: #f9f9f9;

//     @media screen and (min-width: 768px){
//         padding: 100px 0;
//         padding-bottom: 400px;
//     }
// `;

export const ContactWrapper = styled.div`
    display: grid;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    align-items: center;
    justify-content: center;
`;


export const Heading = styled.h1`
    // margin-top: 24px;
    margin-bottom: 24px;
    font-size: 50px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;


//-----------------------------------------------------

export const StyledButton = styled.button`
    background: #01bf71;
    border: 0; 
    color: #fff; 
    padding: 1em; 
    text-transform: uppercase; 
    width: 100%;
    
    &:hover, &:focus {
        background: black;
        color: white; 
        transition: background-color 0.8s ease-out; 
    }
    
`; 

export const Container = styled.div`
    margin-left: auto; 
    margin-right: auto;
    max-width: 1170px;  

    ${props => props.wrapper && css`
        box-shadow: 0 0 20px 0 #01bf71;
        > * {
            padding: 1em; 
        }
        
        @media (min-width: 700px) {
            display: grid; 
            grid-template-columns: 1fr; 
            > * {
                padding: 5em; 
            }
        }
    `}
`; 

export const Form = styled.form`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-gap: 20px; 
`; 

export const Input = styled.input`
    border: 1px solid #01bf71; 
    padding: 1em; 
    width: 100%; 
`; 

export const Label = styled.label`
    display: block; 
    padding-bottom: 5px;
`; 

export const Textarea = styled.textarea`
    border: 1px solid #01bf71; 
    padding: 1em; 
    width: 100%; 
`; 

export const StyledTitle = styled.h1`
    font-size: 70px; 
    text-align: center;

    @media (max-width: 700px) {
        text-align: center; 
        font-size: 50px;
    }
`; 

export const WrapperGrid = styled.div`
    ${props => props.full && css`
        grid-column: 1 / 3;
    `}
`;
