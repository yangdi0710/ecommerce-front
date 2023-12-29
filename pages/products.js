import Center from "@/Components/Center";
import Header from "@/Components/Header";
import ProductsGrid from "@/Components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.8rem;
`;
export default function ProductsPage({products}) {
  return (
    <>
      <Header />
      <Center>
        <Title>Products</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products =await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
