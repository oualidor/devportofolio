import {Container, Flex, Button, Box, Text, useThemeUI} from 'theme-ui';
import NextLink from 'next/link';
import { keyframes } from '@emotion/react';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiTwotoneFileText, AiTwotoneContainer } from 'react-icons/ai';



import {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ReactCountryFlag from "react-country-flag";
import styled from 'styled-components';
import React from 'react';
import {MountBackDrop} from "../../src/Apis/Redux/Actions/Types";
import MeetScheduler from "../MeetScheduler";
import {useDispatch} from "react-redux";
import Divider from "../../src/assets/Images/divider.svg";

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

const LanTag = ({label, lang, country, style}) => {
  return (

        <NextLink href={"/"} locale={lang}>

          <Flex sx={style} className={"langTag"}>
            <Text sx={{color: "primary"}}>{label}</Text>
            <ReactCountryFlag
                className="emojiFlag"
                countryCode={country}
                style={{
                  fontSize: '1em',
                  lineHeight: '2em',
                }}
                aria-label="United States"
            />
          </Flex>

        </NextLink>

  );
};


const NavIcon = ({Icon, link}) => {
  const style = {
    width: ["8vw", "35px", "36px", "38px", "38px", "40px", "40px"],
    marginRight: "5px", cursor: "pointer",
    transition: "0.3s ease",
    display: 'flex',
    alignItems: "center", justifyContent: "center",
    padding: "5px",
    '&:hover': {
      backgroundColor: "#212d45",
      transform: "scale(1.2)",
      cursor: "pointer",
      borderRadius: "50%",
    }
  }
  return (
    <a href={link} target="blank">
      <Box sx={style} >
      <Icon  size="100%" />
    </Box>
    </a>

  );
};


const SectionTitle = (props) => {
  const style = {
    color: "",
    background: "linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
    webkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
  }
  return (
    <Text
        sx={{
          fontSize: ["15px", "15px", "15px", "15px", "15px", "20px", "22px", ],
          fontWeight: "800"
    }}
           style={style}>{props.children}</Text>
  )
}



export default function Header({ className }) {
  const [openMenu, setOpenMenu] = useState(false)

  const dispatch = useDispatch()
  const styles = {

    header: {
      height: '70px',
      color: 'white',
      fontWeight: 'normal',
      py: 2,
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: 'transparent',
      transition: 'all 0.5s ease',
      animation: `${positionAnim} 0.4s ease`,
      '&.sticky': {
        position: 'fixed',
        backgroundColor: '#0F1624',
        color: '',
        boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
        py: 3,
        'nev > a': {
          color: 'text',
        },
      },
    },
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
      fontFamily: "en" == "en" ? "'DM Sans', sans-serif;": "'Amiri', serif;"
    },
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    nav: {
      display: 'flex',
      height: "100%",
      bg: '',
      alignItems: "center",
      justifyContent: 'center',
    },
    lanBox: {
      display: openMenu? "flex": "none", flexDirection: "column",
      p: 20, mt: 20,
      position: "absolute", left: 0,
      backgroundColor: "rgba(255, 255, 255, 0.9)", animation: `${langBoxAnim} 0.8s ease`, },
    langTag: {
      cursor: "pointer",
      width: 80, mb:1,
      justifyContent: "space-between",

    }

  };
  useEffect(()=>{

  }, [])


  return (
    <DrawerProvider>
      <Box sx={styles.header} className={className} id="header">
        <Container>
        <Box sx={styles.container}>
          <SectionTitle>Oualid KHIAL</SectionTitle>
          <Box sx={styles.nav} id={"navContent"}>

            <Button
                 sx={{
                   flexShrink: 0,
                   ml: ['auto', null, null, null, 0],
                   backgroundImage: `url(${Divider})`,
                   backgroundRepeat: 'no-repeat',
                   backgroundPosition: 'center bottom',
                   width: 'fit-content',
                   backgroundSize: 'contain',
                     fontWeight: 'bold',
                   py: ['12px', null, null, null, 2],
                   px: [3, null, null, null, 5],
                   ':hover': {
                     backgroundColor: ['primary', null, null, null, 'transparent'],
                     color: ['white', null, null, null, 'white'],
                   },
                   mr: 3
            }}
                onClick={()=> {
                  dispatch({type: MountBackDrop, Component: <MeetScheduler/> , props:{} ,test: "hi"})
                }}
            >
              Schedule a meet
            </Button>
            <NavIcon Icon={AiFillGithub} link={"https://github.com/oualidor"}></NavIcon>
            <NavIcon Icon={AiFillLinkedin} link={"https://www.linkedin.com/in/oualidkhial/"}></NavIcon>
            {/*<NavIcon Icon={AiTwotoneContainer}></NavIcon>*/}
          </Box>

        </Box>
        </Container>

      </Box>
    </DrawerProvider>
  );
}
