import { Container, Flex, Button, Box, Text } from 'theme-ui';
import NextLink from 'next/link';
import { keyframes } from '@emotion/react';
import { useEffect, useState } from "react";

import ReactCountryFlag from "react-country-flag";
import styled from 'styled-components';
import React from 'react';
import StyledText from '../StyledComponents/StyledText';

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const langBoxAnim = keyframes`
  from {
   
    opacity: 0;
  }
  to {
 
    opacity: 1;
    transition: all 0.4s ease;
  }
`;



export default function Footer({ className }) {
  const [openMenu, setOpenMenu] = useState(false)


  const styles = {
    link: {
      fontSize: [null, null, null, null, null, "20px", "20px"],
      fontWeight: '400',
      textDecoration: "none",
      cursor: 'pointer',

      lineHeight: '1.2',
      '&.active': {
        color: 'green',
      },
      '&.visited': {
        color: 'yellow',
      },
    },
    header: {
      color: 'white',
      fontWeight: 'normal',
      py: 4,
      width: '100%',
      top: 0,
      left: 0,
      backgroundColor: 'transparent',
      transition: 'all 0.5s ease',
      animation: `${positionAnim} 0.4s ease`,
      '.donate__btn': {
        display: "none",
        flexShrink: 0,
        mr: [15, 20, null, null, 0],
        ml: ['auto', null, null, null, 0],
        '@media screen and (min-width: 1220px)': {
          display: 'flex',
        },
      },
      '&.sticky': {
        position: 'fixed',
        backgroundColor: 'transparent',
        color: 'primary',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
        py: 3,
        'nev > a': {
          color: 'text',
        },
        '.donate__btn': {
          borderColor: 'primary',
          color: 'primary',
          '&:hover': {
            boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
            backgroundColor: 'primary',
            color: 'white',
          },
        },
      },
    },
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: ['column', 'column', 'column', 'row', 'row', 'row', 'row'],


    },
    nav: {
      height: "100%",
      width: "30%",
      alignItems: "center",
      justifyContent: 'right',
      display: 'flex',

    },
    lanBox: {
      display: openMenu ? "flex" : "none", flexDirection: "column",
      p: 20, mt: 20,
      position: "absolute", left: 0,
      backgroundColor: "rgba(255, 255, 255, 0.9)", animation: `${langBoxAnim} 0.8s ease`,
    },
    langTag: {
      cursor: "pointer",
      width: 80, mb: 1,
      justifyContent: "space-between",

    },
    footerEntry: {
      fontSize: ["15px", "20px", 16, 20, 20, 25, "15px"]
    }

  };
  useEffect(() => {

  }, [])


  return (

    <Container>
      <hr></hr>
      <Box sx={styles.container}>
        <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "" }}>
          <StyledText variant="title" sx={{ fontSize: [5, 5, 16, 20, 20, 25, 30] }}>Oualid KHIAL</StyledText>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "" }}>
          <Box>
            <StyledText variant="title" sx={styles.footerEntry}>WhatsUp: </StyledText>
            <StyledText variant="title" sx={styles.footerEntry}>+213550750576</StyledText>
          </Box>
          <Box>
            <StyledText variant="title" sx={styles.footerEntry}>Mail: </StyledText>
            <StyledText variant="title" sx={styles.footerEntry}>oualid.khial@gmail.com</StyledText>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
