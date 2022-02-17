import React from "react";

import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

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

const Description = styled.p`
  font-size: 1em;
  text-align: center;
  color: #fff;
`;

const BackHomeButton = styled.button`
  margin-top: 20px;
  padding: 0px 20px;
  background-color: #f26363;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #f27373;
  }
`;

const NotFound: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Container>
      <Title>404</Title>
      <Description>{t("페이지를 찾을 수 없어요.")}</Description>
      <Link to="/">
        <BackHomeButton>
          <Description>{t("홈으로 돌아가기")}</Description>
        </BackHomeButton>
      </Link>
    </Container>
  );
};

export default NotFound;
