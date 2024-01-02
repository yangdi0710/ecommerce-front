const { default: styled } = require("styled-components");

const StyledTitle = styled.h1`
  display: inline-block;
  width: 100%;
  background-color: #a1b5d060;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 2rem;
  margin: 20px 0 6px;
  text-align: center;
`;

const Title = styled.h1`
  display: block;
  font-size: 1.5rem;
  padding-bottom: 10px;
`;

export default StyledTitle;
export { Title }
