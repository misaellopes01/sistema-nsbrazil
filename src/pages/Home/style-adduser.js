import styled from "styled-components";

export const ContainerUser = styled.div`
    width: 500px;
    height: 500px;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;1,100;1,200;1,300;1,400&display=swap');
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
   

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
    margin-top: 20px;
    
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
