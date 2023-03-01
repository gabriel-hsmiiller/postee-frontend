import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    gap: 40px;
    max-width: 60vw;
    width: 100%; 

    @media screen and (max-width: 1024px) {
        max-width: 90vw;
    }

    & > .toast {
        position: fixed;
        bottom: 40px;
        right: 40px;
        background-color: #707070;
        color: white;
        padding: 16px;
        border-radius: 8px;

        &.toast-error {
            background-color: rgba(180, 65, 65, 0.8);
        }

        &.toast-success {
            background-color: rgba(58, 124, 38, 0.8);
        }
    }

    & > h1 {
        font-size: 32px;
        color: #6E951B;
        text-align: center;
        font-family: 'Dosis', sans-serif;
    }

    & > .input-container {
        width: 100%;
        border: solid 2px rgba(0, 0, 0, .6);
        border-radius: 8px;
        display: flex;
        overflow: hidden;

        &:focus-within {
            border: solid 2px #6E951B;
        }

        & > textarea {
            resize: none;
            flex: 1;
            border: none;
            border-radius: 8px;
            padding: 16px 20px;
            outline: none;
        }

        & > button {
            border: none;
            border-radius: 8px;
            background-color: #6E951B;
            margin: 12px 20px;
            height: 60px;
            aspect-ratio: 1;
            cursor: pointer;
        }
    }
`