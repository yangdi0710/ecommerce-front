import { primary } from "@/lib/colors";
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
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
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
      props.black &&
      !props.outline &&
      css`
        background-color: #000;
        color: #fff;
        &:hover {
          opacity: 0.7;
        }
      `}
    ${(props) =>
      props.black &&
      props.outline &&
      css`
        background-color: transparent;
        color: #000;
        border: 1px solid #000;
        &:hover {
          opacity: 0.7;
        }
      `}
  ${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: ${primary};
      border-top: 1px solid ${primary};
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
      border: 1px solid ${primary};
      padding: 4px 8px;
      color: ${primary};
      font-size: 0.8rem;
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
