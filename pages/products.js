import Center from "@/Components/Center";
import Header from "@/Components/Header";
import ProductsGrid from "@/Components/ProductsGrid";
import StyledTitle from "@/Components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";

export default function ProductsPage({products}) {
  return (
    <>
      <Header />
      <Center>
        <StyledTitle>All Products</StyledTitle>
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
