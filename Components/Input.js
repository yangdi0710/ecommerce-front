import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 8px;
  box-sizing: border-box;
  border: 1px solid #555;
  outline: none;
  border-radius: 4px;
`;

export default function Input(props) {
  return <StyledInput {...props} />;
}
