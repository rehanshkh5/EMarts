import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 510px) {
      ${props}
    }
  `;
};



export const medium = (props) => {
  return css`
    @media only screen and (max-width: 810px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 1100px) {
      ${props}
    }
  `;
};
