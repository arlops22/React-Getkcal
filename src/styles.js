import styled from 'styled-components';

export const Container = styled.div ` 
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        height: 2.5em;
        margin: 1em 0;
    }
`;

export const Form = styled.form `
    width: 35%;

    @media (max-width: 780px) {
        width: 80%;
    }
`;

export const FormGroup = styled.div ` 
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    input, select {
        padding: 10px;
        border: 1px solid transparent;
        background: var(--dark-input);
        border-radius: 3px;
        transition: border-color .2s ease-out;

        &:focus {
            border-color: var(--yellow);
        }
    }

    label {
        font-weight: bold;
        margin-bottom: 4px;
    }
`;

export const Button = styled.button ` 
    background: linear-gradient(to right, var(--green), var(--orange), var(--orange), var(--yellow));
    color: var(--dark);
    width: 100%;
    padding: 10px;
    cursor: pointer;
    margin-top: 1em;
    font-weight: 700;
    border-radius: 3px;
    background-size: 300% 100%;
    transition: all .3s ease-out;

    &:hover {
        background-position: 100% 0;
    }
`;


export const ResultContainer = styled.div `
    margin-top: 2em;
    background: var(--dark-input);
    color: var(--white);
    border-radius: 3px;
    padding: 24px;

    ul {
        list-style: none;
    }

    ul li {
        font-weight: 700;
    }

    ul li strong {
        color: var(--green);
        font-weight: 700;
    }
`;