import React from "react";
import bg from "../assets/login.jpg";
import styled from "styled-components";

export default function BgImage() {
  return (
    <Container>
      <img src={bg} alt="background" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
