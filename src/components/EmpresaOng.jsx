import React from "react";
import { Box } from "@mui/material";
import "../scss/Main.scss";
import { scrollEffect } from "../utils/helper";

const EmpresaOng = React.forwardRef((props, myref) => {
  return (
    <Box ref={myref} className="container-slice" display="flex">
      <Box
        display="flex"
        flexDirection={"column"}
        textAlign={"center"}
        alignItems={"flex-start"}
        className={"boxFunciona"}
      >
        <p className="boxFunciona_intro paragraph-s">¿Cómo funciona?</p>
        <h2 className="boxFunciona_intro_title subtitle">
          Somos el espacio de encuentro entre las empresas y el sector social
        </h2>
        <Box display="flex" mt={"4%"}>
          <button
            onClick={() => scrollEffect(props.onClickRefEmpresa)}
            className="btn-soy margin-right"
          >
            Soy empresa
          </button>
          <button
            onClick={() => scrollEffect(props.onClickRefOng)}
            className="btn-soy"
          >
            Soy ong
          </button>
        </Box>
      </Box>

      <Box alignItems={"flex-start"}>
        <img
          src="../assets/image-intro.png"
          alt="Ilustracion para encuentro entre empresas y sector social"
          className="img-intro"
        />
      </Box>
    </Box>
  );
});

export default EmpresaOng;
