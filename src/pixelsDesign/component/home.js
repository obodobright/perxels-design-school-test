import React from "react";
import styled from "styled-components";
import ChildrenBoard from "./childrenBoard";
import DoctorList from "./doctor";
import Hero from "./hero";
import Nav from "./nav";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <Hero />
        <ChildrenBoard />
        <DoctorList />
      </Wrapper>
    </Container>
  );
};

export default Home;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
