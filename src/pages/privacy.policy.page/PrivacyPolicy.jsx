import React from "react";

import {
  Title,
  Author,
  DateContainer,
  Subtitle,
  Content,
  Bold,
} from "./PrivacyPolicy.styles";

const PrivacyPolicy = () => (
  <>
    <Title>Política de Privacidad</Title>
    <Author>avgguido</Author>
    <DateContainer>Fecha Efectiva: 1 de septiembre de 2020</DateContainer>
    <Subtitle>Lea cuidadosamente antes de utilizar nuestro sitio web</Subtitle>
    <Content>
      Al utilizar <Bold>avgguido.com</Bold> usted está aceptando nuestra
      Política de Privacidad expuesta en este sitio web. Nuestra política de
      privacidad explica como efectuamos la recolección de datos en nuestro
      sitio web.
    </Content>
    <Subtitle>Recolección de Información Personal</Subtitle>
    <Content>
      En <Bold>avgguido.com</Bold> la recolección de datos se limita al
      dispositivo de acceso y tu localización geográfica. No realizamos ninguna
      recolección de datos para fines publicitarios.
    </Content>
  </>
);

export default PrivacyPolicy;
