import React, { useState, useRef, useEffect } from 'react';
import {Text, Box } from "theme-ui"
import StyledText from '../StyledComponents/StyledText';
import Carousel from 'react-multi-carousel';

import ButtonGroup from "../button-group";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Entry = ({start, end, degree, spec, school}) =>{

  return (
    <Box sx={
      {
        display: "flex", flexDirection: 'column', alignItems: ["center", "center", "center", "flex-start"]
    }
    }
      >


        <Box sx={{display: "flex", backgroundColor: "", flexDirection: "row", alignItems: 'center'}}>
        <StyledText variant="timeLineTitle">
        {start}
        </StyledText>

        </Box>

      <Text variant='muted'>{degree}</Text>
      <Text variant='muted'>{spec}</Text>
      <Text variant='muted'>{school}</Text>
    </Box>
  )
}

const Timeline = ({Title, Text, Data}) => {
  const TOTAL_CAROUSEL_COUNT = Data.length;
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();


  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {

  }, []);

  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
      <StyledText variant="sectionTitle">{Title}</StyledText>
      <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
  >
          {
          Data.map((entry, i) =>{
            return (<Entry
                key={i}
              start={entry.year}
              degree={entry.degree}
              school={entry.school}
              spec={entry.spec}
              ></Entry>)
          })
        }
    </Carousel>
    </Box>
  );
};

export default Timeline;
