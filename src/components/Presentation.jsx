/* eslint-disable prettier/prettier */
import React from "react";
import "../scss/Main.scss";
import { Box } from "@mui/material";

function Presentation() {
  return (
    <Box display="flex" mt={"8%"} className="container">
      <Box className="box-title-p">
        <h1 className="title">
          Soluciones para facilitar el impacto social de las empresas
        </h1>
        <p className="title_p paragraph">
          Fonselp es la plataforma ideal para donar, realizar compras
          responsables, compartir el conocimiento de tus equipos, o conectar con
          organizaciones que están cambiando el mundo.
        </p>
        <button className="btn-registrate">Registrate gratis</button>
      </Box>
      <Box className="box-img-presentation">
        <img
          src="../assets/image-hero.png"
          alt=" Ilustracion para soluciones que facilitan el impacto social de las empresas"
          className="box-img-presentation_img-hero"
        />
      </Box>
    </Box>
  );
}

export default Presentation;
