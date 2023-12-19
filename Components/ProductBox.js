import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/Cart";

const ProductWrapper = styled.div``;

const WhiteBox = styled.div`
  background-color: #fff;
  padding: 10px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 120px;
  }
`;

const Title = styled.h2`
  font-size: .9rem;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`

export default function ProductBox({ _id, title, description, price, images }) {
  return (
    <ProductWrapper>
      <WhiteBox>
        <div>
          <img src={images[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <div>
            <Button primary={1} outline={1}>
              <CartIcon />
              Add
            </Button>
          </div>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
