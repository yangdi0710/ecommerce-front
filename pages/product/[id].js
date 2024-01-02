import Center from "@/Components/Center";
import Header from "@/Components/Header";
import ProductImages from "@/Components/ProductImages";
import StyledTitle, { Title } from "@/Components/Title";
import WhiteBox from "@/Components/WhiteBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;
`;

export default function ProductPage({ product }) {
  return (
    <>
      <Header />
      <Center>
        <StyledTitle>Product Details</StyledTitle>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images}/>
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            {product.description}
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
