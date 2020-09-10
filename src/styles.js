import styled from 'styled-components';

export const Container = styled.div ` 
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 2em;
        font-weight: 700;
        margin-top: 16px;
    }
`;

export const Form = styled.form ` 
    margin-top: 2em;
    width: 550px;
`;

export const FormGroup = styled.div ` 
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    input, select {
        padding: 5px;
        border: 1px solid black;
    }

    label {
        font-weight: bold;
        margin-bottom: 4px;
    }
`;

export const Button = styled.button ` 
    background: black;
    color: white;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    margin-top: 1em;
    font-weight: 700;
`;


export const ResultContainer = styled.div `
    margin-top: 2em;
    background: black;
    color: white;
    padding: 24px;

    ul {
        list-style: none;
    }

    ul li strong {
        color: gray;
    }
`;