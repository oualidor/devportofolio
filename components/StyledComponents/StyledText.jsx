import React, { useState, useRef, useEffect } from 'react';
import { Text, Box } from "theme-ui"
import Divider from '../../src/assets/Images/divider.svg'

const StyledText = (props) => {
  const style = {
    color: "transparent",
    background: "linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",

    WebkitBackgroundClip: "text",
    backgroundClip: "text",

  }



  return (

    <Text {...props} style={style}>{props.children}</Text>


  )
}

export default StyledText;
