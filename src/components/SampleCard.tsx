import React, {useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 10px;
  margin: 30px;

  background: rgba(77, 77, 77, 0.3);
  backdrop-filter: saturate(120%) blur(2px);

  transition: backdrop-filter 0.3s ease-in-out;
`;

const DescriptionContainer = styled.div``;

type Props = {
  title: string;
  description: string;
  link: string;

  fadeDirection: "left" | "right" | "up" | "down";
};

const SampleCard: React.FC<Props> = ({
  title,
  description,
  link,
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
        <img
          src={"https://i.ytimg.com/vi_webp/qLrzmnYgPdI/sddefault.webp"}
          width={300}
        />
        <DescriptionContainer>
          <p>アーネスト(Ernest)</p>
        </DescriptionContainer>
      </Container>
    </div>
  );
};

export default SampleCard;
