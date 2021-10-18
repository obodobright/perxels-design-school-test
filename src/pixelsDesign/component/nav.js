import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import logo from "../asset/logo.png";
import { FaBars } from "react-icons/fa";
const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <Harbumger>
          <FaBars />
        </Harbumger>
        <Navigation>
          <NavLink>About Us</NavLink>
          <NavLink>Schedule</NavLink>
          <NavLink>Contact</NavLink>
          <NavLink>Sign In</NavLink>
          <NavBtn>About Us</NavBtn>
          <FiSearch />
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Nav;
const Harbumger = styled.div`
  display: none;
  font-size: 30px;
  margin: 0 20px;
  color: #ffba4b;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;
const NavBtn = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffba4b;
  color: #736145;
`;
const Logo = styled.img`
  width: 150px;
  object-fit: cover;
  padding-top: 40px;

  margin: 0 2%;
`;
const NavLink = styled.div`
  font-size: 17px;
  margin: 0 20px;
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin: 0 8%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #21574a;
`;
