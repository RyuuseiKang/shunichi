import {t} from "i18next";
import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  flex-direction: column;
  background: #262526;
  color: #fff;
`;

const Download: React.FC = () => {
  return (
    <Container>
      <div>
        <h2>{t("다운로드")}</h2>
        <p>{t("단음")}</p>
        <p>{t("연속음")}</p>
      </div>
    </Container>
  );
};

export default Download;
