import Button from "@/Components/Button";
import { CartContext } from "@/Components/CartContext";
import Header from "@/Components/Header";
import Input from "@/Components/Input";
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

const CityHolders = styled.div`
  display: flex;
  gap: 0.7rem;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStressAddress] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);
  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  async function goToPayment() {
    const response = await axios.post('/api/checkout', {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    });
    if(response.data.url){
      window.location = response.data.url;
    }
  }
  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
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
                      <Button onClick={() => lessOfThisProduct(product._id)}>
                        -
                      </Button>
                      <QuantityLabel>
                        {cartProducts.filter((id) => id === product._id).length}
                      </QuantityLabel>
                      <Button onClick={() => moreOfThisProduct(product._id)}>
                        +
                      </Button>
                    </td>
                    <td>
                      {cartProducts.filter((id) => id === product._id).length *
                        product.price}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>Total Price:</td>
                  <td></td>
                  <td>{total}</td>
                </tr>
              </tbody>
            </Table>
          )}
        </Box>
        {!!cartProducts?.length && (
          <Box>
            <h2>Order Information</h2>
            <form method="post" action="/api/checkout">
              <Input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <CityHolders>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  name="postalCode"
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </CityHolders>
              <Input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                name="streetAddress"
                onChange={(e) => setStressAddress(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Country"
                value={country}
                name="country"
                onChange={(e) => setCountry(e.target.value)}
              />
              <Button black={1} size={"large"} block={1} onClick={goToPayment}>
                Continue to payment
              </Button>
            </form>
          </Box>
        )}
      </ColumnsWrapper>
    </>
  );
}
