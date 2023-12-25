import Button from "@/Components/Button";
import { CartContext } from "@/Components/CartContext";
import Header from "@/Components/Header";
import { Title } from "@/Components/NewProducts";
import Table from "@/Components/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 2.5rem;
  margin-top: 40px;
`;
const Box = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;
  font-size: 1.2rem;
`;

const ProductInfoCell = styled.td`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  img {
    max-width: 100px;
    max-height: 100px;
  }
`;
const ProductImageBox = styled.div`
  max-width: 100px;
  max-height: 100px;
  padding: 4px;
  border-radius: 6px;
  border: solid 1px rgba(0, 0, 0, 0.1);
`;

const QuantityLabel = styled.span`
  padding: 0 6px;
`;

export default function CartPage() {
  const { cartProducts, addProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    }
  }, [cartProducts]);
  function moreOfThisProduct(id){
    addProduct(id)
  }
  return (
    <>
      <Header />
      <ColumnsWrapper>
        <Box>
          <Title>Cart</Title>
          {!cartProducts?.length && <div>Your cart is empty</div>}
          {products?.length > 0 && (
            <Table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <ProductInfoCell>
                      <ProductImageBox>
                        <img src={product.images[0]} alt="" />
                      </ProductImageBox>
                      {product.title}
                    </ProductInfoCell>
                    <td>
                      <Button>-</Button>
                      <QuantityLabel>
                        {cartProducts.filter((id) => id === product._id).length}
                      </QuantityLabel>
                      <Button onClick={() => moreOfThisProduct(product._id)}>+</Button>
                    </td>
                    <td>
                      {cartProducts.filter((id) => id === product._id).length *
                        product.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Box>
        {!!cartProducts?.length && (
          <Box>
            <h2>Order Information</h2>
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Address 2" />
            <Button black size={"large"} block>
              Continue to payment
            </Button>
          </Box>
        )}
      </ColumnsWrapper>
    </>
  );
}
