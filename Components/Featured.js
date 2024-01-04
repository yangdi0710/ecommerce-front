import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/Cart";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const BgStyled = styled.div`
  color: #fff;
  background-color: #2b2b2b;
  padding: 50px 0;
`;
const Tittle = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.7rem;
  text-transform: uppercase;
  @media screen and (min-width: 768px){
    font-size: 2.2rem;
  }
`;

const Desc = styled.p`
  color: #c5c5c5;
  font-size: 0.9rem;

`;

const ColumnWrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: 1fr;
  div:nth-child(1){
    order: 1;
  }
  img {
    max-width: 70%;
    display: block;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    div:nth-child(1){
      order: 0
    }
    img {
      max-width: 100%;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 28px;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <BgStyled>
      <Center>
        <ColumnWrapper>
          <Column>
            <div>
              <Tittle>{product.title}</Tittle>
              <Desc>{product.description}</Desc>
              <ButtonWrapper>
                <ButtonLink
                  href={`/product/${product._id}`}
                  outline={1}
                  white={1}
                >
                  Read More
                </ButtonLink>
                <Button primary={1} onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to Cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <Column>
            <img src="https://yangdi0710-next-ecommerce.s3.amazonaws.com/1701093536966.jpg" />
          </Column>
        </ColumnWrapper>
      </Center>
    </BgStyled>
  );
}
