import Center from "@/Components/Center";
import Header from "@/Components/Header";
import StyledTitle from "@/Components/Title";
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

const Title = styled.h1`
  display: block;
  font-size: 1.5rem;
  padding-bottom: 10px;
`;



export default function ProductPage({ product }) {
  return (
    <>
      <Header />
      <Center>
        <StyledTitle>Product Details</StyledTitle>
        <ColWrapper>
          <WhiteBox>
            <img style={{maxWidth: '100%'}} src={product.images?.[0]} alt="" />
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
