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
  font-size: 3rem;
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
  gap: 16px;
  align-items: center;
  margin-top: 28px
`;

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
                <Button outline={1} white={1}>
                  Read More
                </Button>
                <Button primary>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
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
