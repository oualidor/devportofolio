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



export default function SingleCarrierDetails({carrier}) {

    const tabs = [
        {
            id: 0,
            component: <CarrierProjects projects={carrier.projects}></CarrierProjects>


        },
        {
            id: 1,
            component: <CarrierAbout carrier={carrier}></CarrierAbout>
        }
    ]
    const categories = [
        {
            id: 0,
            title : (carrier.projects !== null && carrier.projects !== undefined) ? "Projects [ " + carrier.projects.length+ " ]"  : "Projects [0]" ,
            icon: FaBriefcase
        },
        {
            id: 1,
            title : "About",
            icon: AiFillDollarCircle
        },

    ]
    const style = {
        CarrierHolder: {
            display: ["none", "none", "none", "none", "flex", "flex", "flex"],
            backgroundColor: "primary", width: "85vw", height: "85vh", p:1, overflow: "auto", overflowX: "hidden",
            flexDirection: ["column", "column", "column", "row", "row", "row", "row"],
        },
        GalleryHolder: {
            display: "none", backgroundColor: "primary", width: "85vw", height: "85vh", p:0, overflow: "auto", overflowX: "hidden",
            flexDirection: ["column", "column", "column", "column", "column", "column", "column"], alignItems: "center", justifyContent: "space-around"
        }
    }
    useEffect(()=>{

    }, [])

  return (
      <Box>
          <Box sx={style.CarrierHolder} id={"CarrierHolder"}>

              <Box sx={{backgroundColor: "primary", p:5, mb:5, width: ["100%", "25%", "25%", "25%", "25%", "25%", "25%"]}}>
                  {true && <CarrierCard {...carrier } ></CarrierCard>}
              </Box>
              <Box sx={{backgroundColor: "primary", p:5, width: "80%", overflow: "auto", overflowX: "hidden"}}>
                  {true && <TabsWidget tabs={tabs} categories={categories}></TabsWidget>}
              </Box>
          </Box>

      </Box>
  )
}
