import {t} from "i18next";
import React from "react";

import styled, {keyframes} from "styled-components";

import Particles from "react-tsparticles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

import useWindowDimensions from "../hooks/windowDimensions";
import SampleCard from "../components/SampleCard";

import {sample} from "../assets/samples";
import {details} from "../assets/details";

const Container = styled.div`
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", "Kosugi";
  flex-direction: column;
  background: #262526;
  color: #fff;
  z-index: 2;
  overflow: hidden;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 920px;
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
  z-index: 3;
  backdrop-filter: saturate(120%) blur(10px);
`;

const HeaderPadder = styled.div`
  max-width: 880px;
  min-width: 290px;
  width: 100%;
  margin: 0px 22px;

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
    cursor: pointer;
  }
`;

const ButtonDescription = styled.span`
  color: #fff;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const CharacterContainer = styled.div`
  display: flex;
  padding-top: 50px;
  justify-content: flex-end;
  z-index: 3;
`;

const CharacterImage = styled.div<{isMobile: boolean}>``;

const CharacterDescription = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  min-width: 100px;
  padding: 50px 20px;
`;

const CharacterName = styled.span`
  font-size: 1.5em;
  color: #e1282f;
  font-weight: bold;
  text-align: left;

  text-shadow: 0px 0px 5px #33333333;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  text-shadow: 0px 0px 10px #333333;
`;

const TagTitle = styled.span`
  padding-top: 10px;
  font-size: 1.4em;
  font-weight: bold;
  text-decoration: underline 4px #e1282fe0;
  text-underline-offset: 2px;
  transition: text-decoration-color 300ms;

  &:hover {
    text-decoration-color: #e1282fff;
  }
`;

const rightToLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(300px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
  101%{
    opacity: 1;
  }
`;

const TagDescription = styled.span<{delay: number}>`
  padding-top: 10px;
  padding-bottom: 0px;
  padding-left: 30px;
  font-size: 1.1em;
  opacity: 0;
  animation: ${rightToLeft} 1s ${({delay}) => `${delay.toString()}00ms`}
    ease-in-out forwards;
`;

const LinkTag = styled.a`
  padding-left: 10px;
  color: #ffffff;
  text-decoration: none 4px #e1282fe0;
`;

const SampleContainer = styled.div`
  justify-content: center;
  margin: 0px 22px;
  padding: 20px 0px;
`;

const DefaultDesignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 22px;
  padding: 20px 0px;
`;

const DefaultDesignImageContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const DefailtDesignDescription = styled.span`
  text-align: right;
  padding-top: 10px;
`;

const UserTag = styled.span`
  padding-left: 20px;
`;

const FooterContainer = styled.div``;

const Main: React.FC = () => {
  const {width} = useWindowDimensions();
  const isMobile = useMediaQuery({maxWidth: 767});

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
              opacity: 0.15,
              width: 1,
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
      <Header>
        <HeaderPadder>
          <div>
            <CharacterName>{t("마루네 슌이치")}</CharacterName>
          </div>
          <Link to="/download">
            <Button>
              <ButtonDescription>{t("VB 다운로드")}</ButtonDescription>
            </Button>
          </Link>
        </HeaderPadder>
      </Header>
      <ContentsContainer>
        <Contents>
          <CharacterContainer>
            <CharacterImage isMobile={isMobile}>
              <img
                style={{margin: isMobile ? -10 : 0}}
                src="https://static.wixstatic.com/media/2c6226_362a05829cbb4fa798450b4527220009~mv2_d_3500_7016_s_4_2.png/v1/crop/x_0,y_6,w_3033,h_7010/fill/w_520,h_1202,al_c,q_90,usm_0.66_1.00_0.01/Shunichi_Dominat.webp"
                alt="marune shunichi"
                width={isMobile ? width * 0.7 : "100%"}
              />
            </CharacterImage>
            <CharacterDescription>
              {details.map((item, i) => {
                console.log(i);
                return (
                  <TagContainer>
                    <TagTitle>{t(item.title)}</TagTitle>
                    {item.description.map((description, j) => {
                      return (
                        <TagDescription delay={i}>
                          {t(description, item?.descriptionOption[j])}
                        </TagDescription>
                      );
                    })}
                  </TagContainer>
                );
              })}
              <TagContainer>
                <TagTitle>{t("연락")}</TagTitle>
                <TagDescription delay={0}>
                  <FontAwesomeIcon icon={faTwitter} />
                  <LinkTag href="https://twitter.com/Dalso_ON">
                    {t("@Dalso_ON")}
                  </LinkTag>
                </TagDescription>
                <TagDescription delay={0}>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  <LinkTag href="mailto: ksh12947@gmail.com">
                    {t("ksh12947@gmail.com")}
                  </LinkTag>
                </TagDescription>
              </TagContainer>
            </CharacterDescription>
          </CharacterContainer>
          <SampleContainer>
            <TagTitle>{t("샘플")}</TagTitle>
            {sample.map((item, index) => {
              return (
                <SampleCard
                  fadeDirection={index % 2 ? "left" : "right"}
                  title={item.title}
                  type={item.type}
                  ustWriter={item.ust_writer}
                  originalVideo={item.original_video}
                  link={item.link}
                />
              );
            })}
          </SampleContainer>
          <DefaultDesignContainer>
            <TagTitle>{t("디폴트 디자인")}</TagTitle>
            <DefaultDesignImageContainer>
              <img
                width={"100%"}
                src={
                  "https://static.wixstatic.com/media/2c6226_5b88e521fbe0473e9bcccdceeb600afe~mv2_d_3000_2500_s_4_2.png/v1/fill/w_948,h_782,al_c,q_90,usm_0.66_1.00_0.01/%EB%A7%88%EC%97%90.webp"
                }
              />
              <img
                width={"100%"}
                src={
                  "https://static.wixstatic.com/media/2c6226_77f6623c67bc438381ce502f7d69eb58~mv2_d_3000_2500_s_4_2.png/v1/fill/w_852,h_708,al_c,q_90,usm_0.66_1.00_0.01/%EC%9A%B0%EC%8B%9C%EB%A1%9C.webp"
                }
              />
              <DefailtDesignDescription>
                {t("일러스트")}
                <UserTag>
                  <FontAwesomeIcon icon={faTwitter} />
                  <LinkTag href="https://twitter.com/myni_2362">
                    {t("마이니님(@myni_2362)")}
                  </LinkTag>
                </UserTag>
              </DefailtDesignDescription>
            </DefaultDesignImageContainer>
          </DefaultDesignContainer>
        </Contents>
      </ContentsContainer>
      <FooterContainer></FooterContainer>
    </Container>
  );
};

export default Main;
