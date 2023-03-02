import styled from "styled-components";

export const StyledNote = styled.article`
    width: 563px;
    background-color: #F0F0F0;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 40px 16px;

    @media screen and (max-width: 603px) {
        width: 90vw;
    }

    .content {
        margin-bottom: 40px;
        font-size: 18px;

        & > .body {
            margin-bottom: .25rem;
            word-break: break-word;
            white-space: pre-wrap;

            & > .tag {
                color: #6E951B;
            }
        }
    }

    .button-group {
        display: flex;
        justify-content: space-around;
        gap: 16px;

        button {
            border: none;
            border-radius: 8px;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            gap: 8px;
            color: #6E951B;
            background-color: #F0F0F0;

            span {
                font-size: 20px;
            }

            &:hover {
                background-color: #E0E0E0;
                transition: all .2s;
            }
        }
    }

    .downloadable-content {
        display: none;
    }
`;
