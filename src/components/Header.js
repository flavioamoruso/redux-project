import React from "react";
import { Container } from "./styled";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as CartIcon } from "../images/cart.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Container background='blue'>
      <h2>Header</h2>
    </Container>
  );
};

export default Header;
