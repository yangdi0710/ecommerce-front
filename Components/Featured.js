import styled from "styled-components";
import Center from "./Center";
import PrimaryBtn from "./Button";
import Button from "./Button";

const BgStyled = styled.div`
  color: #fff;
  background-color: #333;
  padding: 50px 0;
`;
const Tittle = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Desc = styled.p`
  color: #c5c5c5;
  font-size: 0.9rem;
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  img {
    max-width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px
`

const Column = styled.div`
  display: flex;
  align-items: center;
`;

export default function Featured() {
  return (
    <BgStyled>
      <Center>
        <ColumnWrapper>
          <Column>
            <div>
              <Tittle>Pro Everywhere</Tittle>
              <Desc>
                Esse do nisi ut aliqua sit adipisicing eu excepteur duis.
                Cupidatat id pariatur irure ex laborum sit exercitation aute
                deserunt ad cillum. Irure et eu dolore eu commodo sit ea eu amet
                laboris aliqua
              </Desc>
              <ButtonWrapper>
                  <Button outline white size={"large"}>Read More</Button>
                  <Button primary size = {"large"}>Add to Cart</Button>
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
