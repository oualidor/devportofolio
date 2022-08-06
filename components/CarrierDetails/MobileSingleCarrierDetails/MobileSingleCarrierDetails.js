import {useEffect, useState} from "react";
import {AiFillDollarCircle, AiFillLinkedin, AiFillPhone, AiFillPieChart, AiOutlineMail} from 'react-icons/ai';
import { FaBriefcase, FaCog } from 'react-icons/fa';
import { AiFillCloseCircle } from "react-icons/ai";
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
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


export default function MobileSingleCarrierDetails({carrier}) {

    const tabs = [
        {
            id: 0,
            component:        <Box sx={{backgroundColor: "primary", p:5, mb:5, width: ["100%", "100%", "100%", "100%", "100%", "100%", "100%"]}}>
                {true && <CarrierCard {...carrier } ></CarrierCard>}
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
            backgroundColor: "primary", width: "90vw", height: "85vh", p:1, overflow: "auto", overflowX: "hidden",
            flexDirection: ["column", "column", "column", "column", "column", "column", "row"],
        },
    }

  return (
          <Box sx={style.CarrierHolder} id={"CarrierHolder"}>
              {true && <TabsWidget tabs={tabs} categories={categories}></TabsWidget>}
          </Box>

  )
}
