import React, { useState, useRef, useEffect } from 'react';
import {Text, Box } from "theme-ui"
import Divider from '../../src/assets/Images/divider.svg'

const SectionTitle = (props) => {
    const style = {
      color: "transparent",
      background: "linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
      webkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",

    }

    const sx = {
        flexShrink: 0,
        mr: [15, 20, null, null, 0],
        ml: ['auto', null, null, null, 0],
        // backgroundImage: ['none', null, null, null, `url(${Divider})`],
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        width: 'fit-content',
        backgroundSize: 'contain',
        backgroundColor: ['', null, null, null, 'transparent'],
        fontWeight: 'bold',
        py: ['12px', null, null, null, 2],
        px: [3, null, null, null, 0],
        ':hover': {
            color: ['white', null, null, null, 'primary'],
        },
    }

    return (
        <Text {...props} style={style}>{props.children}</Text>
    )
}

export default SectionTitle;
