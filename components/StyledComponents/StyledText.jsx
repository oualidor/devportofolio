import React, { useState, useRef, useEffect } from 'react';
import {Text, Box } from "theme-ui"

const StyledText = (props) => {
    const style = {
      color: "transparent",
      background: "linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
      webkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
    }
    return (
      <Text {...props} style={style}>{props.children}</Text>
    )
}

export default StyledText;