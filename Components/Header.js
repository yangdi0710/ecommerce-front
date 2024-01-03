import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";

const StyledHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #d5d5d5;
`;

const StyledNav = styled.nav`
  display: flex;;
  gap: 15px;
`
const NavButton = styled.button`
  background-color: transparent;
  width: 50px;
  height: 50px;
  border: 0;
  color: white;
  cursor: pointer;
`

export default function Header() {
  const {cartProducts} = useContext(CartContext)
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecommerce</Logo>
          <StyledNav>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All Products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
