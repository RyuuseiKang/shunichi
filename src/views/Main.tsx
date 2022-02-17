import {t} from "i18next";
import React from "react";

import styled from "styled-components";

import Particles from "react-tsparticles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

import useWindowDimensions from "../hooks/windowDimensions";
import SampleCard from "../components/SampleCard";

import {sample} from "../assets/samples";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", "Kosugi";
  flex-direction: column;
  background: #262526;
  color: #fff;
  z-index: 2;
`;

const Contents = styled.div`
  padding: 50px 0px;
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
  justify-content: right;
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

const TagDescription = styled.span`
  padding-top: 10px;
  padding-bottom: 0px;
  padding-left: 30px;
  font-size: 1.1em;
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

const FooterContainer = styled.div``;

const Main: React.FC = () => {
  const {width} = useWindowDimensions();
  const isMobile = useMediaQuery({maxWidth: 767});

  return (
    <>
      <Particles
        options={{
          fpsLimit: 60,
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
      <Container>
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
                <TagTitle>{t("음원 가공 가능 여부")}</TagTitle>
                <TagDescription>
                  {t("가능(라이브에 한해서 조절만을 허가)")}
                </TagDescription>
                <TagDescription>
                  {t("음원의 음을 조절하거나 피치를 올리거나 내리는 것을 허가")}
                </TagDescription>
              </TagContainer>
              <TagContainer>
                <TagTitle>{t("파생 캐릭터 생성 가능 여부")}</TagTitle>
                <TagDescription>{t("NO")}</TagDescription>
              </TagContainer>
              <TagContainer>
                <TagTitle>{t("상업적 이용")}</TagTitle>
                <TagDescription>
                  {t("CV에게 연락을 부탁드립니다.")}
                </TagDescription>
              </TagContainer>
              <TagContainer>
                <TagTitle>{t("2차 창작의 허용 가능 범위")}</TagTitle>
                <TagDescription>
                  {t("성적 표현 가능 (BL: R-18+, N/HL: R-15)")}
                </TagDescription>
                <TagDescription>
                  {t("유혈 가능, 내장 또는 신체 절단 등의 묘화 불가")}
                </TagDescription>
              </TagContainer>
              <TagContainer>
                <TagTitle>{t("Youtube, 니코니코동화에 투고")}</TagTitle>
                <TagDescription>{t("가능")}</TagDescription>
              </TagContainer>
              <TagContainer>
                <TagTitle>{t("일러스트")}</TagTitle>
                <TagDescription>{t("DANG님 + TOK님(Dominant)")}</TagDescription>
              </TagContainer>
              <TagContainer>
                <TagTitle>{t("연락")}</TagTitle>
                <TagDescription>
                  <FontAwesomeIcon icon={faTwitter} />
                  <LinkTag href="https://twitter.com/Dalso_ON">
                    {t("@Dalso_ON")}
                  </LinkTag>
                </TagDescription>
                <TagDescription>
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
            </DefaultDesignImageContainer>
          </DefaultDesignContainer>
        </Contents>
        <FooterContainer></FooterContainer>
      </Container>
    </>
  );
};

export default Main;
