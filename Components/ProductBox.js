import styled from "styled-components";

const ProductWrapper = styled.div``;

const WhiteBox = styled.div`
  background-color: #fff;
  padding: 10px;
  height: 150px;
  img {
    max-width: 100%;
    max-height: 150px;
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  return (
    <ProductWrapper>
      <WhiteBox>
        <img src={images[0]} alt="" />
        {title}
      </WhiteBox>
    </ProductWrapper>
  );
}
