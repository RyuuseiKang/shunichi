import React from "react";

import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import Particles from "react-tsparticles";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  flex-direction: column;
  background: #262526;
`;

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: #fff;
  text-decoration: underline;
  text-decoration-color: #f26363;
`;

const Description = styled.h2`
  font-size: 1.6em;
  text-align: center;
  color: #fff;
  padding-bottom: 40px;
`;

const BackHomeButton = styled.div`
  padding: 5px 10px;
  background: #e1282f00;
  color: #ffffff;
  border-radius: 20px;
  border: solid #e1282f;

  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);

  &:hover {
    background: #e1282f53;
  }
`;

const NotFound: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Container>
      <Particles
        options={{
          fpsLimit: 60,
          particles: {
            color: {value: "#ffffff"},
            line_linked: {
              color: "#ffffff",
              distance: 70,
              enable: true,
              opacity: 0.2,
              width: 2,
            },
            move: {
              bounce: false,
              direction: "none",
              enable: true,
              out_mode: "out",
              random: true,
              speed: 0.3,
              straight: true,
            },
            number: {density: {enable: true, value_area: 650}, value: 85},
            opacity: {
              anim: {enable: true, opacity_min: 0.3, speed: 1, sync: false},
              random: {
                enable: true,
                minimumValue: 0.7,
              },
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: false,
              value: 1,
            },
          },
        }}
      />
      <Title>404</Title>
      <Description>{t("페이지를 찾을 수 없어요.")}</Description>
      <Link to="/">
        <BackHomeButton>{t("홈으로 돌아가기")}</BackHomeButton>
      </Link>
    </Container>
  );
};

export default NotFound;
