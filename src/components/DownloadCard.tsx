import {t} from "i18next";
import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 5px;

  background: rgba(55, 56, 55, 0.3);
  backdrop-filter: saturate(120%) blur(2px);

  transition: backdrop-filter 0.3s ease-in-out;
`;

const TypeDescription = styled.span`
  font-weight: bold;
  font-size: 1.5em;
`;

const LanguageDescription = styled.span`
  left-padding: 10px;
`;

const BottomContainer = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const PasswordDescription = styled.span``;

const ButtonContainer = styled.div`
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

type DownloadCardProps = {
  language: string;
  type: string;
  password?: string;
  download: string;
};

const DownloadCard: React.FC<DownloadCardProps> = ({
  type,
  password,
  language,
  download,
}) => {
  return (
    <Container>
      <TypeDescription>{t(type)}</TypeDescription>
      <div />
      <LanguageDescription>{t(language)}</LanguageDescription>

      <BottomContainer>
        <PasswordDescription>
          {password && t("비밀번호 : password", {password})}
        </PasswordDescription>
        <a href={download}>
          <ButtonContainer>{t("다운로드")}</ButtonContainer>
        </a>
      </BottomContainer>
    </Container>
  );
};

export default DownloadCard;
