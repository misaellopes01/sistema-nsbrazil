import styled from "styled-components";

export const Container = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
position: absolute;
flex-direction: block;
justify-content: space-around;
background-color: #c4c4c4;

`;

export const Content = styled.div`
padding: 50px;
height: 80vh;
max-width: 700px;
display: flex;
justify-content: flex-around;
flex-direction: column;
background-color: #fff;
border-radius: 15px;
`;

export const Blocks = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;



export const Block = styled.div`
    width: 200px;
    height: 180px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 5px;
    text-align: center;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin-left: 20px;
    cursor: pointer;
`;

export const Img = styled.img`
width: 80px;
height: 70px;
object-fit: contain;
`;



export const Label = styled.label`
font-size: 20px;
colo0r: #1b1b1b;
font-weight: 400;
`; 
