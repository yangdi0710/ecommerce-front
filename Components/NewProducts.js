import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
  padding-top: 20px;
`;

const Title = styled.h2`
  display: inline-block;
  width: 100%;
  background-color: #a1b5d060;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 2rem;
  margin: 20px 0 6px;
  text-align: center;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid>
        {products?.length > 0 &&
          products.map((product, index) => (
            <ProductBox key={index} {...product} />
          ))}
      </ProductsGrid>
    </Center>
  );
}
