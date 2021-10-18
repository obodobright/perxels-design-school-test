import React from "react";
import styled from "styled-components";
import boardImg from "../asset/Rectangle16.png";
import { BsArrowRight } from "react-icons/bs";
import "./hero.css";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Content className="content">
          <ContentHead className="contentHead">
            A healthy lifestyle is all we care about.
          </ContentHead>
          <ContentDesc>
            In ullamco pariatur dolore ad amet officia aliqua mollit quis exercitation voluptate est
            magna ut. Officia magna aliquip excepteur proident eiusmod cillum incididunt laborum.
            Fugiat pariatur consectetur dolore est commodo.
          </ContentDesc>
          <Button>
            <ContentBtn> Book Appointment</ContentBtn>
            <BsArrowRight style={{ color: "#FFBA4B", marginLeft: "20px", fontWeight: "bold" }} />
          </Button>
        </Content>
        <HeroImg src={boardImg} className="hero" />
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Button = styled.div`
  display: flex;
  align-items: center;
`;
const ContentHead = styled.div`
  font-family: lato;
  font-size: 65px;
  font-weight: 700;
  text-transform: capitalize;
  width: 450px;
  color: white;
  @media screen and (max-width: 414px) {
    width: 300px;
  }
`;
const ContentDesc = styled.div`
  width: 400px;
  font-family: lato;
  font-size: 18px;
  font-weight: 400;
  color: white;
  margin-right: 10px;
  margin-top: 20px;
  @media screen and (max-width: 414px) {
    width: 300px;
    margin-bottom: 20px;
  }
`;
const ContentBtn = styled.div`
  width: 200px;
  height: 40px;
  background: #ffba4b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 20px 0;
  cursor: pointer;
  color: #504b44;
`;
const Content = styled.div``;
const HeroImg = styled.img`
  @media screen and (min-width: 769px) {
    width: 600px;
    height: 500px;
    object-fit: contain;
    margin: 0 5%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 85vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 40px;
  @media screen and (max-width: 414px) {
    flex-direction: column;
  } ;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  background: #21574a;
`;
