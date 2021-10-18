import React from "react";
import styled from "styled-components";
import Data from "./data";

const DoctorList = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Doctor's nearby</Title>
        <SeeMore>See More</SeeMore>
      </TitleContainer>
      <Wrapper>
        {Data.map((doc) => (
          <Card key={doc.id}>
            <DoctorImg src={doc.img} />
            <DoctorInfo>
              <DoctorName>{doc.DocName}</DoctorName>
              <DoctorSpec>{doc.DocSpec}</DoctorSpec>
            </DoctorInfo>
            <DocAppoint bg={doc.bg} bd={doc.bd}>
              Book an Appointment
            </DocAppoint>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default DoctorList;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const SeeMore = styled.div`
  margin: 0 8%;
  text-decoration: underline;
  color: #ffba4b;
  opacity: 0.8;
  font-weight: bold;
`;

const DocAppoint = styled.div`
  width: 100%;
  height: 30px;
  background: ${({ bg }) => (bg ? "#ffba4b" : "transparent")};
  border: ${({ bd }) => (bd ? "1px solid #ffba4b " : "")};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  color: #504e45;
`;
const DoctorInfo = styled.div`
  padding 15px 5px;
  font-family:lato
`;
const DoctorImg = styled.img`
  width: 250px;
  height: 70%;
  object-fit: cover;
`;
const DoctorName = styled.div`
  font-size: 22px;
  font-weight: 400;
`;
const DoctorSpec = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

const Card = styled.div`
  width: 250px;
  height: 300px;
  margin: 20px 20px;
  @media screen and (max-width: 414px) {
    width: 240px;
  }
`;
const Title = styled.div`
  font-size: 45px;
  font-family: lato;
  weight: 600;
  opacity: 0.6;
  margin: 0 8%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 40vh;
`;
