import styled from "styled-components";
import ProductBox from "./ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr 1fr;

  padding-top: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function ProductsGrid({ products }) {
  return (
    <StyledProductsGrid>
      {products?.length > 0 &&
        products.map((product, index) => (
          <ProductBox key={index} {...product} />
        ))}
    </StyledProductsGrid>
  );
}
