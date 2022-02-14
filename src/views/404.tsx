import React from "react";

import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
`;

const Description = styled.p`
  font-size: 1em;
`;

const NotFound: React.FC = () => {
  return (
    <div>
      <Title>404</Title>
      <Description>Page not found</Description>
    </div>
  );
};

export default NotFound;
