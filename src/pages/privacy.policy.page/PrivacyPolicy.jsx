import React, { useEffect } from "react";

import {
  Title,
  Author,
  DateContainer,
  Subtitle,
  Content,
  Bold,
} from "./PrivacyPolicy.styles";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Title>Política de Privacidad</Title>
      <Author>avgguido</Author>
      <DateContainer>Fecha Efectiva: 1 de septiembre de 2020</DateContainer>
      <Subtitle>
        Lea cuidadosamente antes de utilizar nuestro sitio web
      </Subtitle>
      <Content>
        Al utilizar <Bold>avgguido.com</Bold> usted está aceptando nuestra
        política de privacidad expuesta en este sitio web. Nuestra política de
        privacidad explica de manera explícita la forma en la que efectuamos la
        recolección de sus datos personales dentro del sitio web. Esto nos
        permite otorgarle una mejor experiencia de usuario.
      </Content>
      <Subtitle>Recolección de Información Personal</Subtitle>
      <Content>
        En <Bold>avgguido.com</Bold> la recolección de sus datos personales se
        genera a partir de sus interacciones con el sitio web y la información
        recolectada se limita a:
        <ul>
          <li>
            <Bold>Dispositivo de acceso</Bold>
          </li>
          <li>
            <Bold>Localización geográfica</Bold>
          </li>
          <li>
            <Bold>Fecha y duración de la visita</Bold>
          </li>
        </ul>
      </Content>
      <Subtitle>Divulgación de Información Personal</Subtitle>
      <Content>
        <Bold>No compartimos, vendemos, rentamos o intercambiamos</Bold> su
        información personal recolectada en este sitio web con terceros para
        fines comerciales. La información obtenida es empleada para análisis
        interno y mejora continua del sitio web.
      </Content>
      <Subtitle>Monitoreo del Sitio Web</Subtitle>
      <Content>
        El sitio web <Bold>avgguido.com</Bold> hace uso de servicios de
        hardware, infraestructura de redes, almacenamiento, alojamiento web y
        otras tecnologías de terceros empleadas para ofrecer una experiencia
        óptima dentro del sitio web. Al hacer uso de la plataforma, usted
        autoriza a <Bold>avgguido.com</Bold> de transferir, almacenar y hacer
        uso de su información recolectada en México y cualquier otro país donde
        operemos.
      </Content>
      <Subtitle>Seguridad</Subtitle>
      <Content>
        En el sitio web <Bold>avgguido.com</Bold> utilizamos encriptación{" "}
        <Bold>(HTTPS/SSL)</Bold> para proteger la transferencia de información
        sensible, sin embargo, la transferencia de información cien por ciento
        segura no puede ser garantizada. Usted utiliza esta plataforma bajo su
        propio riesgo y usted es responsable de tomar las medidas de seguridad
        necesarias para asegurar su cuenta de navegación.
      </Content>
      <Subtitle>Cambios en la Política de Privacidad</Subtitle>
      <Content>
        En caso de efectuar algún cambio en nuestra política de privacidad,
        estos serán publicados y <Bold>la fecha efectiva será actualizada</Bold>{" "}
        para reflejar la entrada en vigor de las nuevas cláusulas propuestas.
      </Content>
    </>
  );
};

export default PrivacyPolicy;
