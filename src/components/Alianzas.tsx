/* eslint-disable prettier/prettier */
import React from "react";

import { Box } from "@mui/material";

import UseCarousel from "./helper-components/UseCarousel";

import "../scss/Main.scss";

interface ImagesObj {
  [key: string]: any;
}

const images: ImagesObj[] = [
  {
    title: "Mercado Libre",
    src: "../assets/logos/mercado-libre.png",
  },
  {
    title: "Santander Río",
    src: "../assets/logos/santander.png",
  },
  {
    title: "Grupo México",
    src: "../assets/logos/grupo-mex.png",
  },
  {
    title: "Superville",
    src: "../assets/logos/superville.png",
  },
  {
    title: "Globant",
    src: "../assets/logos/globant.png",
  },
];

// eslint-disable-next-line react/display-name
const Alianzas = React.forwardRef((props, myref) => {
  return (
    <Box
      ref={myref}
      display="flex"
      flexDirection={"column"}
      textAlign={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      alignContent={"center"}
      className={"container-auto"}
    >
      <Box className={"titleBox"}>
        <p className="titleBox_intro paragraph-s">Alianzas</p>
        <h2 className="titleBox_intro_title subtitle">
          Conéctate con organizaciones increíbles
        </h2>
        <p
          className=" titleBox_intro_title_text text"
          style={{ margin: "2rem" }}
        >
          Conoce a las organizaciones y causas que están guiando una nueva
          generación de innovadores.
        </p>
        <Box className="box-carousel">
          <UseCarousel datos={images} />
        </Box>
      </Box>
    </Box>
  );
});

export default Alianzas;
