import Button from "@/Components/Button";
import { CartContext } from "@/Components/CartContext";
import Center from "@/Components/Center";
import Header from "@/Components/Header";
import ProductImages from "@/Components/ProductImages";
import StyledTitle, { Title } from "@/Components/Title";
import WhiteBox from "@/Components/WhiteBox";
import CartIcon from "@/Components/icons/Cart";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";
import { useContext } from "react";
import styled from "styled-components";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin: 30px 0;
`

const Price = styled.span`
  font-size: 2rem;
  font-weight: 700;
`

export default function ProductPage({ product }) {
  const {addProduct} = useContext(CartContext)
  return (
    <>
      <Header />
      <Center>
        <StyledTitle>Product Details</StyledTitle>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            {product.description}
            <PriceRow>
              <Price>${product.price}</Price>
              <Button size={"large"} outline black onClick={() => addProduct(product._id)}>
                <CartIcon />
                Add to Cart
              </Button>
            </PriceRow>
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
