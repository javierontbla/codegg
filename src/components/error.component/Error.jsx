import React from "react";

import { Container, LoadAgain } from "./Error.styles";

const Error = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Container>
      la conexión con el servidor fallo :(
      <LoadAgain onClick={() => reloadPage()}>cargar de nuevo</LoadAgain>
    </Container>
  );
};

export default Error;
