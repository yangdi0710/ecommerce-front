import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  border: 0;
  padding: 8px 15px;
  border-radius: 5px;
  max-width: 100%;
  svg {
    height: 15px;
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
    css`
      background-color: #1f6eff;
      border: 1px solid #1f6eff;
      color: #fff;
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

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
