import React, {useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import styled, {keyframes} from "styled-components";
import {t} from "i18next";

const Container = styled.div`
  display: flex;
  padding: 10px;
  margin: 30px;
  border-radius: 5px;

  background: rgba(55, 56, 55, 0.3);
  backdrop-filter: saturate(120%) blur(2px);

  transition: backdrop-filter 0.3s ease-in-out;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0px 10px 0px 20px;
  justify-content: center;
  align-items: center;

  text-shadow: 0px 0px 10px #33333333;
`;

const Title = styled.span`
  text-align: center;
  font-weight: bold;
  padding-top: 20px;
`;

const Type = styled.p`
  text-align: center;
`;

const OriginalTag = styled.a`
  padding: 10px 0px 3px 0px;
  color: #e1282f;
  text-decoration: none;
  background: linear-gradient(#e1282f, #e1282f) bottom / 0 0.1em no-repeat;
  transition: 0.3s background-size ease-in-out;
  background-size: 0% 0.1em;
  background-position: left bottom;

  &:hover {
    background: linear-gradient(#e1282f, #e1282f) bottom / 0 0.1em no-repeat;

    background-size: 100% 0.1em;

    background-position: left bottom;
  }
`;

type Props = {
  title: string;
  type: string;
  ustWriter: string;
  originalVideo: string;
  link: string;

  fadeDirection: "left" | "right" | "up" | "down";
};

const SampleCard: React.FC<Props> = ({
  title,
  type,
  ustWriter,
  link,
  originalVideo,
  fadeDirection,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div data-aos={"fade-" + fadeDirection} data-aos-delay="300">
      <Container>
        <iframe
          width="430px"
          height="300px"
          src={`https://www.youtube.com/embed/${link}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
        <DescriptionContainer>
          <div>
            <Title>{title + " (ust." + ustWriter + ")"}</Title>
            <Type>{t(type)}</Type>
          </div>
          <OriginalTag
            href={originalVideo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("본가")}
          </OriginalTag>
        </DescriptionContainer>
      </Container>
    </div>
  );
};

export default SampleCard;
