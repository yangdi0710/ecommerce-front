import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";

const StyledHeader = styled.header`
  background-color: #2b2b2b;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #d5d5d5;
  padding: 8px 0;
`;

const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `display: block;` : `display: none;`}
  display: block;
  gap: 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 80px 20px 20px;
  background-color: #2b2b2b;
  @media screen and (max-width: 768px) {
    &:before {
      content: "";
    position: absolute;
    top: 64px;
    left: 20px;
    width: 50%;
    border-bottom: 2px solid #ddd;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
    &:after {
      content: "";
    position: absolute;
    left: calc(36%);
    height: 58px;
    width: 32%;
    border-bottom: 2px solid #ddd;
    }
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 50px;
  height: 50px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false)
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecommerce</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All Products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
