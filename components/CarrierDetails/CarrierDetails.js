import {useEffect, useState} from "react";
import { AiFillDollarCircle, AiFillPieChart } from 'react-icons/ai';
import { FaBriefcase, FaCog } from 'react-icons/fa';

import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';

import {Box, Button, Container, Text} from "theme-ui";
import PortableText from "@sanity/block-content-to-react";
import StyledText from "../StyledComponents/StyledText";
import SkillTag from "../SkillTag/SkillTag";
import {getOneCarrier} from "../../services";
import TabsWidget from "../TabsWidget/TabsWidget";
import ButtonGroup from "../button-group";
import Carousel from "react-multi-carousel";
import {Serializer, urlFor} from "../../services/_SanityClient";
import Project from "./Project";
import CarrierCard from "./CarrierCard";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1619 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    laptop: {
        breakpoint: { max: 1619, min: 1024 },
        items: 1,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};



export default function CarrierDetails({id}) {

    let [carrier, setCarrier] = useState({skills: [], company: {}, projects: []})
    let [loaded, setLoaded] = useState(false)
    const tabs = [
        {
            id: 0,
            component:
                <Box>
                    <Box sx={{display: "flex", flexDirection: "column", mb: 5}}>
                        <StyledText  sx={{fontSize: "25px"}}>The company</StyledText>
                        <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                            <PortableText blocks={carrier.company.description} serializers={Serializer} />
                        </Text>
                    </Box>
                    <Box>
                        <StyledText  sx={{fontSize: "25px"}}>The role</StyledText>
                        <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                            <PortableText blocks={carrier.content} serializers={Serializer} />
                        </Text>
                        <Box sx={{flexDirection: 'row', backgroundColor: "", width: "100%", display: "flex", marginLeft: "20px", alignItems: "center"}}>
                            <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", flexWrap: "wrap"}}>
                                {
                                    carrier.skills.map(skill =>{
                                        return (<SkillTag name={skill}></SkillTag>)
                                    })
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
        },
        {
            id: 1,
            component:
                <Carousel
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="carousel-container"
                    customButtonGroup={<ButtonGroup />}
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={true}
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
                    {carrier.projects.map((project) => (
                        <Project {...project} />
                    ))}
                </Carousel>

        }
    ]

    const categories = [
        {
            id: 0,
            title : "About",
            icon: AiFillDollarCircle
        },
        {
            id: 1,
            title : "Projects",
            icon: FaBriefcase
        }
    ]
    const style = {
        container: {
            display: "flex", backgroundColor: "primary", width: "85vw", height: "85vh", p:1, overflow: "auto", overflowX: "hidden",
            flexDirection: ["column", "column", "column", "column", "row", "row", "row"],
        }
    }

    useEffect(() => {
        getOneCarrier(id).then(carrier =>{
            setCarrier(carrier)
            console.log("/////////////////////////////////////////////////////")
            console.log(carrier)
            setLoaded(true)
        })
    }, [id]);

  return (

      <Box sx={style.container}>
          <Box sx={{backgroundColor: "primary", p:5, mb:5, width: ["100%", "25%", "25%", "25%", "25%", "25%", "25%"]}}>
              {loaded && <CarrierCard {...carrier } ></CarrierCard>}
          </Box>
          <Box sx={{backgroundColor: "primary", p:5, width: "80%"}}>
              {loaded && <TabsWidget tabs={tabs} categories={categories}></TabsWidget>}
          </Box>
      </Box>
  )
}






