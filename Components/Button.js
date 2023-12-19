import styled, { css } from "styled-components";

export const ButtonStyle = css`
  display: inline-flex;
  align-items: center;
  border: 0;
  padding: 8px 15px;
  border-radius: 5px;
  max-width: 100%;
  text-decoration: none;
  svg {
    height: 18px;
    margin-right: 6px;
  }
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    `}
  ${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: #1f6eff;
      border-top: 1px solid #1f6eff;
      padding-bottom: 10px;
      color: #fff;
      &:hover {
        opacity: 0.9;
      }
    `}
    ${(props) =>
      props.primary &&
      props.outline &&
      css`
        background-color: transparent;
        border: 1px solid #1f6eff;
        padding: 6px 10px;
        color: #1f6eff;
        font-weight: 700;
        &:hover {
          opacity: 0.9;
        }
      `}
    ${(props) =>
    props.size === "large" &&
    css`
      font-size: 1.2rem;
      padding: 10px 15px;
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
