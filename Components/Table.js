import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border: none;
  th {
    text-align: left;
    text-transform: uppercase;
    color: #8f8f8f;
    padding: 10px 0;
    font-weight: 800;
    font-size: 1.1rem;
  }
  td {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default function Table(props) {
  return <StyledTable {...props} />;
}
