import styled from "styled-components";

export const ContainerUser = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;1,100;1,200;1,300;1,400&display=swap');
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
`; 

export const ContentUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    padding: 20px;
    border-radius: 10px;
    max-width: 400px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;
export const LabelUser = styled.label `
    font-size: 30px;
    font-weight: 600;
    color: #004576;
`;

export const LabelErrorUser = styled.label`
    font-size: 14px;
    color: red;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #676767;
    }

`;
