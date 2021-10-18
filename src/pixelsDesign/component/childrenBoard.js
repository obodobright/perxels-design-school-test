import React from "react";
import styled from "styled-components";
import boardImg from "../asset/board.png";
import "./children.css";

const ChildrenBoard = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={boardImg} />
        <Content className="childContent">
          <ContentHead className="childContentHead">
            At DailyCare, we do not only care for the adults, we also have special treatment for
            children.
          </ContentHead>
          <ContentDesc>
            Ullamco excepteur id amet consequat adipisicing enim aliquip incididunt magna est irure
            aute. Nostrud ut deserunt mollit eiusmod minim magna aliquip. Lorem non qui non quis est
            quis ullamco non.
          </ContentDesc>
          <ContentBtn>Book Children Appointment</ContentBtn>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default ChildrenBoard;
const ContentBtn = styled.div`
  width: 221px;
  height: 40px;
  background: #ffba4b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: #504e45;
`;
const ContentHead = styled.div``;
const ContentDesc = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin: 30px 0;
  width: 450px;
  @media screen and (max-width: 414px) {
    width: 300px;
  }
`;
const Image = styled.img`
  width: 400px;
  height: 400px;
  background: blue;
  line-height: 36px;
  object-fit: cover;
  margin: 20px 0;
  @media screen and (max-width: 414px) {
    width: 300px;
  }
`;
const Content = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  background: whitesmoke;
`;
