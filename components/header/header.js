import {Container, Flex, Button, Box, Text, useThemeUI} from 'theme-ui';
import NextLink from 'next/link';
import { keyframes } from '@emotion/react';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiTwotoneFileText,
  AiTwotoneContainer,
  AiOutlineMedium
} from 'react-icons/ai';



import {useEffect, useRef, useState} from "react";
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
import dividerBack from "../../src/assets/Images/dividerBack.svg";
import {IoMdClose, IoMdMenu} from "react-icons/io";
import {MobileOnly} from "../MobileOnly";
import {LargeOnly} from "../LargeOnly";
import SideBar from "../SideBar/SideBar";
import StyledText from "../StyledComponents/StyledText";

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


const LargeNavEntry = ({Icon, link, label}) => {
  const entryRef = useRef(null)
  const labelRef = useRef(null)
  const style = {

    marginRight: "10px", cursor: "pointer",
    transition: "0.4s ease",
    display: 'flex',
    alignItems: "center", justifyContent: "center", px: '60px',
    padding: "5px",
    '&:hover': {
      backgroundColor: "#212d45",
      transform: "scale(1.2)",
      cursor: "pointer",
      borderRadius: "20px",
      animationDuration: '0.5s'
    },

  }
  useEffect(() => {
    try{
      // entryRef.current.addEventListener("mouseenter", ()=>{
      //   labelRef.current.style.display = 'block'
      // })
      // entryRef.current.addEventListener('mouseleave', ()=>{
      //   labelRef.current.style.display = 'none'
      // })
    }catch (e){

    }
    return () => {};
  }, [entryRef]);

  return (
    <a href={link} target="blank" ref={entryRef}>
      <Box sx={style} >
      <Icon  size="30px" style={{marginRight: '5px'}}/>
        <Text sx={style.label} ref={labelRef}>{label}</Text>
    </Box>
    </a>

  );
};

const MobileNavEntry = ({text, Icon, link, setIsOpen}) => {
  const style = {
    width: 'auto',
    marginRight: "5px", cursor: "pointer", background: '',
    transition: "0.3s ease",
    display: 'flex',
    alignItems: "center", justifyContent: "left",
    padding: "5px",
    '&:hover': {
      color: 'white',
      backgroundColor: "#212d45",
      transform: "scale(1.2)",
      cursor: "pointer",
      borderRadius: "20px",
    }
  }
  return (
      <a href={link} target="blank">
        <Box sx={style} onClick={()=>{setIsOpen(true)}}>
          <Icon  size="26px" style={{marginRight: '20px'}}/>
          {text}
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
    langTag: {
      cursor: "pointer",
      width: 80, mb:1,
      justifyContent: "space-between",

    },
    handler: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      width: '26px',
      cursor: 'pointer',
      '@media screen and (min-width: 1220px)': {
        display: 'none',
      },
    },



  };
  const [isOpen, setIsOpen] = useState(true)

  useEffect(()=>{

  }, [])


  return (
      <Box sx={styles.header} className={className} id="header">
        <Container>
        <MobileOnly>
          <SideBar isOpen={isOpen}>
            <Button
                variant={'whiteButton'}
                sx={{

                  flexShrink: 0,
                  backgroundImage: `url(${dividerBack})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center bottom',
                  backgroundSize: 'contain',
                  fontWeight: 'bold',
                  py: ['12px', null, null, null, 3],
                  px: [3, null, null, null, 5], mb: '15px',

                }}
                onClick={(e)=> {
                  setIsOpen(true)
                  dispatch({type: MountBackDrop, Component: <MeetScheduler meetId={'first-contact'}/> , props:{} ,test: "hi"})
                }}
            >
              Schedule a meet
            </Button>
            <MobileNavEntry text={'Github'} Icon={AiFillGithub} link={"https://github.com/oualidor"} setIsOpen={setIsOpen}></MobileNavEntry>
            <MobileNavEntry text={'LinkedIn'} Icon={AiFillLinkedin} link={"https://www.linkedin.com/in/oualidkhial/"} setIsOpen={setIsOpen}></MobileNavEntry>
            <MobileNavEntry text={'The Academy'} Icon={AiOutlineMedium} link={"https://www.linkedin.com/in/oualidkhial/"} setIsOpen={setIsOpen}></MobileNavEntry>

            {/*<Text sx={{position: 'absolute', top: '85%', left: '20%'}}>Oualid KHIAL</Text>*/}
            {/*<Text sx={{position: 'absolute', top: '90%', left: '20%'}}>0550750576</Text>*/}
          </SideBar>
        </MobileOnly>
        <Box sx={styles.container}>
          <StyledText variant={'timeLineTitle'} sx={{fontWeight: 'bold', lineHeight: '20px',}}>Oualid KHIAL</StyledText>
          <Box sx={styles.nav} id={"navContent"}>


            <LargeOnly>
              <LargeNavEntry Icon={AiFillLinkedin} link={"https://www.linkedin.com/in/oualidkhial/"} label={'LinkedIn'}></LargeNavEntry>
            </LargeOnly>
            <LargeOnly>
              <LargeNavEntry Icon={AiFillGithub} link={"https://github.com/oualidor"} label={'GitHub'}></LargeNavEntry>
            </LargeOnly>
            <LargeOnly>
              <LargeNavEntry Icon={AiOutlineMedium} link={"https://github.com/oualidor"} label={'The Academy'}></LargeNavEntry>
            </LargeOnly>
            <LargeOnly>
              <Button
                  sx={{
                    borderLeft: '1px solid white',
                    borderRight: '0px solid white',
                    flexShrink: 0,
                    ml: ['auto', null, null, null, 0],
                    backgroundImage: `url(${Divider})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center bottom',
                    backgroundSize: 'contain',
                    fontWeight: 'bold',
                    py: ['12px', null, null, null, '12px'],
                    px: [3, null, null, null, 5],
                    ':hover': {
                      backgroundImage: `url(${dividerBack})`,
                      backgroundColor: ['primary', null, null, null, 'white'],
                      color: ['white', null, null, null, 'primary'],
                    },
                    mr: 3
                  }}
                  onClick={()=> {
                    dispatch({type: MountBackDrop, Component: <MeetScheduler meetId={'first-contact'}/> , props:{} ,test: "hi"})
                  }}
              >
                Schedule a meet
              </Button>
            </LargeOnly>
            <MobileOnly>
              {
                isOpen
                    ? <IoMdMenu size="24px" onClick={()=>{setIsOpen(!isOpen)}}/>
                    : <IoMdClose size="24px" onClick={()=>{setIsOpen(!isOpen)}}/>
              }
            </MobileOnly>


          </Box>

        </Box>
        </Container>

      </Box>
  );
}
