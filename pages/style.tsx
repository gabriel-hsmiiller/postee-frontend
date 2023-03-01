import styled from "styled-components";

export const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
    width: calc(100vw - 40px);

    .security-info {
        position: absolute;
        right: 36px;
        top: 20px;
        gap: 40px;
        display: flex;

        & > a {
            color: rgba(0, 0, 0, .6);

            &:hover {
                color: #6E951B;
            }
        }

        @media screen and (max-width: 603px) {
            gap: 20px;
            justify-content: center;
            left: 36px;

            & > a {
                text-align: center;
            }
        }
    }
`;