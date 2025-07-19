import {useEffect, useState} from "react";
import {AiFillDollarCircle, AiFillLinkedin, AiFillPhone, AiFillPieChart, AiOutlineMail} from 'react-icons/ai';
import { FaBriefcase, FaCog } from 'react-icons/fa';
import { AiFillCloseCircle } from "react-icons/ai";
import 'react-multi-carousel/lib/styles.css';
import {Box, Button, Container, Flex, Spinner, Text} from "theme-ui";
import PortableText from "@sanity/block-content-to-react";
import StyledText from "../../StyledComponents/StyledText";
import SkillTag from "../../SkillTag/SkillTag";
import {getOneCarrier} from "../../../services";
import TabsWidget from "../../TabsWidget/TabsWidget";

import Carousel from "react-multi-carousel";
import {Serializer, urlFor} from "../../../services/_SanityClient";
import Project from "../Project";
import CarrierCard from "./CarrierCard";
import ButtonGroup from "../../button-group";
import CarrierAbout from "../CarrierAbout";
import CarrierProjects from "../CarrierProjects";
import {CancelPresentation, ClosedCaptionOutlined, CloseSharp, HighlightOff} from "@mui/icons-material";
import {HideBackDrop} from "../../../src/Apis/Redux/Actions/Types";
import {useDispatch} from "react-redux";
import {createTheme, IconButton, ThemeProvider, Typography} from "@mui/material";


export default function MobileSingleCarrierDetails({carrier}) {
    const dispatch = useDispatch()

    const tabs = [
        {
            id: 0,
            component:        <Box sx={{backgroundColor: "primary", p:5, mb:5, width: ["100%", "100%", "100%", "100%", "100%", "100%", "100%"]}}>
                <CarrierCard {...carrier } ></CarrierCard>
            </Box>

        },
        {
            id: 1,
            component: <CarrierAbout carrier={carrier}></CarrierAbout>

        },
        {
            id: 2,
            component: <CarrierProjects projects={carrier.projects}></CarrierProjects>
        }
    ]

    const categories = [
        {
            id: 0,
            title : "Overview",
            icon: AiFillDollarCircle
        },
        {
            id: 1,
            title : "About",
            icon: AiFillDollarCircle
        },
        {
            id: 2,
            title : (carrier.projects !== null && carrier.projects !== undefined) ? "Projects [ " + carrier.projects.length+ " ]"  : "Projects [0]" ,
            icon: FaBriefcase
        }
    ]

    const style = {
        CarrierHolder: {
            display: ["flex", "flex", "flex", "flex", "none", "none", "none"],
            backgroundColor: "primary", width: "100vw", height: "100vh", p:0, overflow: "auto", overflowX: "hidden",
            flexDirection: ["column", "column", "column", "column", "column", "column", "row"],
        },
        topBar: {

            display: "flex", alignItems: 'center', justifyContent: 'space-between', px: 2, pt: 2, backgroundColor: ''
        }
    }

    return (
          <Box sx={style.CarrierHolder} id={"CarrierHolder"}>
              <Box sx={style.topBar}>
                  <Text sx={{color:"#FFF"}}></Text>
                          <ThemeProvider theme={createTheme({})}>
                              <Typography sx={{fontSize: 25}} onClick={()=>{
                                  dispatch({type: HideBackDrop, props:{} ,test: "hi"})

                              }}>
                                  <HighlightOff sx={{color: '#FFF'}} fontSize={"inherit"}></HighlightOff>
                              </Typography>
                      </ThemeProvider>
                  </Box>
               <TabsWidget tabs={tabs} categories={categories}></TabsWidget>
          </Box>

    )
}
