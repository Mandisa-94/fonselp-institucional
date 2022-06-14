/* eslint-disable prettier/prettier */

import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../scss/Main.scss";

const UseCarousel = ({ datos }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      centerMode
      // dynamicHeight
    >
      {datos?.map((data) => (
        <Box key={data.title} className={"box-carouser-img"}>
          <img src={data.src} alt={data.title} style={{ width: "30%" }} />
        </Box>
      ))}
    </Carousel>
  );
};

export default UseCarousel;
