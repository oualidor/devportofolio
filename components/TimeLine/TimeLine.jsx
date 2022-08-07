import React, { useState, useRef, useEffect } from 'react';
import {Text, Box } from "theme-ui"
import StyledText from '../StyledComponents/StyledText';
import Carousel from 'react-multi-carousel';

import ButtonGroup from "../button-group";
import Divider from "../../src/assets/Images/divider.svg";
import SectionTitle from "../StyledComponents/SectionTitle";

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

      <Text variant='muted' sx={{fontWeight: "bold"}}>{degree}</Text>
      <Text variant='muted'  sx={{marginLeft: "10px"}}>{spec}</Text>
      <Text variant='muted' sx={{marginLeft: "10px"}}>{school}</Text>
    </Box>
  )
}

const Timeline = ({Title, Text, Data}) => {
  const sx = {
    flexShrink: 0,
    mr: [15, 20, null, null, 0],
    ml: ['auto', null, null, null, 0],
    backgroundImage: ['none', null, null, null, `url(${Divider})`],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
    backgroundSize: 'contain',
    width: 'fit-content',
    backgroundColor: ['#FEEDEF', null, null, null, 'transparent'],
    fontWeight: 'bold',
    py: ['12px', null, null, null, 2],
    px: [3, null, null, null, 0],
    ':hover': {
      backgroundColor: ['primary', null, null, null, 'transparent'],
    },
  }
  useEffect(() => {

  }, []);

  return (
    <Box sx={{display: "flex", flexDirection: "column"}} id={"Education"} variant={'section.PageSection'} as={"section"}>

      <SectionTitle variant="sectionTitle">{Title}</SectionTitle>
      <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          draggable
          focusOnSelect={false}
          infinite={false}
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
