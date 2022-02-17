import {t} from "i18next";
import React from "react";

import styled from "styled-components";

import Particles from "react-tsparticles";
import {Link} from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  flex-direction: column;
  background: #262526;
  color: #fff;
`;

const Header = styled.div`
  background: rgba(33, 33, 33, 0.3);
  width: 100%;
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
  backdrop-filter: saturate(120%) blur(10px);
`;

const HeaderPadder = styled.div`
  max-width: 880px;
  min-width: 340px;
  width: 100%;
  padding: 0px 22px;

  display: flex;

  justify-content: space-between;
  z-index: 3;
`;

const Button = styled.button`
  padding: 5px 20px;
  background-color: #e1282f;
  border: none;
  border-radius: 20px;

  &:hover {
    background-color: #f73d20;
  }
`;

const ButtonDescription = styled.span`
  color: #fff;
  font-weight: bold;
`;

const CharacterContainer = styled.div`
  display: flex;
  padding-top: 50px;
  justify-content: center;
  z-index: 1;
`;

const CharacterImage = styled.div`
  flex: 1;
`;

const CharacterDescription = styled.div`
  flex: 1;
  padding-top: 150px;
`;

const CharacterName = styled.span`
  font-size: 1.5em;
  color: #e1282f;
  font-weight: bold;
`;

const TagContainer = styled.div`
  padding-bottom: 15px;
`;

const TagTitle = styled.span`
  font-size: 1.4em;
  font-weight: bold;
  text-decoration: underline 4px #e1282fe0;
  text-underline-offset: 2px;
  transition: text-decoration-color 300ms;

  &:hover {
    text-decoration-color: #e1282fff;
  }
`;

const TagDescription = styled.p`
  padding-left: 30px;
  font-size: 1.1em;
`;

const Main: React.FC = () => {
  return (
    <Container>
      <Particles
        style={{zIndex: 0}}
        options={{
          fpsLimit: 120,
          particles: {
            color: {value: "#ffffff"},
            line_linked: {
              color: "#ffffff",
              distance: 30,
              enable: true,
              opacity: 0.09,
              width: 1,
            },
            move: {
              bounce: false,
              direction: "none",
              enable: true,
              out_mode: "out",
              random: true,
              speed: 0.15,
              straight: true,
            },
            number: {density: {enable: true, value_area: 500}, value: 300},
            opacity: {
              anim: {enable: true, opacity_min: 0.2, speed: 1, sync: false},
              random: {
                enable: true,
                minimumValue: 0.2,
              },
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              anim: {enable: false, size_min: 0.3, speed: 4, sync: false},
              random: false,
              value: 1,
            },
          },
        }}
      />
      <Header>
        <HeaderPadder>
          <div>
            <CharacterName>{t("마루네 슌이치")}</CharacterName>
          </div>
          <Button>
            <Link to="/download">
              <ButtonDescription>{t("VB 다운로드")}</ButtonDescription>
            </Link>
          </Button>
        </HeaderPadder>
      </Header>
      <CharacterContainer>
        <CharacterImage>
          <img
            src="https://static.wixstatic.com/media/2c6226_362a05829cbb4fa798450b4527220009~mv2_d_3500_7016_s_4_2.png/v1/crop/x_0,y_6,w_3033,h_7010/fill/w_520,h_1202,al_c,q_90,usm_0.66_1.00_0.01/Shunichi_Dominat.webp"
            alt="character"
          />
        </CharacterImage>
        <CharacterDescription>
          <TagContainer>
            <TagTitle>{t("CV")}</TagTitle>
            <TagDescription>{t("달소(Dalso, ダルソ)")}</TagDescription>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t("성별")}</TagTitle>
            <TagDescription>{t("남자")}</TagDescription>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t("나이")}</TagTitle>
            <TagDescription>{t("n살", {n: 20})}</TagDescription>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t("키")}</TagTitle>
            <TagDescription>{t("ncm", {n: 185})}</TagDescription>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t("체중")}</TagTitle>
            <TagDescription>{t("nkg", {n: 72})}</TagDescription>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t("생일")}</TagTitle>
            <TagDescription>{t("n월 m일", {n: 12, m: 1})}</TagDescription>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t("좋아하는 것")}</TagTitle>
            <TagDescription>{t("달콤한 것(디저트 류)")}</TagDescription>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t("싫어하는 것")}</TagTitle>
            <TagDescription>
              {t("불필요한 것(하단 스토리에서 언급)")}
            </TagDescription>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t("언어")}</TagTitle>
            <TagDescription>{t("일본어")}</TagDescription>
          </TagContainer>
        </CharacterDescription>
      </CharacterContainer>
    </Container>
  );
};

export default Main;
