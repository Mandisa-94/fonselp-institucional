import React from "react";
import UseCarousel from "./helper-components/UseCarousel";
import "../scss/Main.scss";
import { Box } from "@mui/material";

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

const Alianzas = React.forwardRef((props, myref) => {
  return (
    <Box
      ref={myref}
      display="flex"
      flexDirection={"column"}
      textAlign={"center"}
      alignItems={"flex-start"}
      className={"container"}
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
        <UseCarousel datos={images} />
      </Box>
    </Box>
  );
});

export default Alianzas;
