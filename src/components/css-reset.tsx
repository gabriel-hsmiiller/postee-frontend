import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-track {
      background: #FFFFFF;
    }
    &::-webkit-scrollbar-thumb {
      background: #6E951B;
    }
  }
  body {
    font-family: 'Inter', sans-serif;
    color: #222222;
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  #__next {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    cursor: pointer;
    &:hover {
      opacity: .9;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  body {

    & > .downloadable-content {
        margin-bottom: 40px;
        font-size: 18px;
        min-height: 320px;
        width: 400px;
        padding: 20px;
        position: relative;

        & > .body {
            margin-bottom: 1rem;
            word-break: break-word;
            white-space: pre-wrap;
            font-size: 32px;

            & > .tag {
                color: #6E951B;
            }
        }

        & > .footer {
            text-align: right;
            position: absolute;
            bottom: 8px;
            right: 8px;
            color: #6E6E6E;

            & > .link {
              color: #6E951B;
            }
        }
    }
  }
`;