import {useEffect, useState} from "react";
import {AiFillDollarCircle, AiFillLinkedin, AiFillPhone, AiFillPieChart, AiOutlineMail} from 'react-icons/ai';
import { FaBriefcase, FaCog } from 'react-icons/fa';
import { AiFillCloseCircle } from "react-icons/ai";
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
import ImageGallery from "../../components/image-gallery"
import {Box, Button, Container, Flex, Text} from "theme-ui";
import PortableText from "@sanity/block-content-to-react";
import StyledText from "../StyledComponents/StyledText";
import SkillTag from "../SkillTag/SkillTag";
import {getOneCarrier} from "../../services";
import TabsWidget from "../TabsWidget/TabsWidget";

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

    let [carrier, setCarrier] = useState({skills: [], company: {}, projects: [{images: []}]})
    let [loaded, setLoaded] = useState(false)
    const tabs = [
        {
            id: 0,
            component: <CarrierAbout carrier={carrier}></CarrierAbout>

        },
        {
            id: 1,
            component: <CarrierProjects projects={carrier.projects}></CarrierProjects>


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
            title : (carrier.projects !== null && carrier.projects !== undefined) ? "Projects [ " + carrier.projects.length+ " ]"  : "Projects [0]" ,
            icon: FaBriefcase
        }
    ]
    const style = {
        CarrierHolder: {
            display: "flex", backgroundColor: "primary", width: "85vw", height: "85vh", p:1, overflow: "auto", overflowX: "hidden",
            flexDirection: ["column", "column", "column", "column", "row", "row", "row"],
        },
        GalleryHolder: {
            display: "none", backgroundColor: "primary", width: "85vw", height: "85vh", p:0, overflow: "auto", overflowX: "hidden",
            flexDirection: ["column", "column", "column", "column", "column", "column", "column"], alignItems: "center", justifyContent: "space-around"
        }
    }

    useEffect(() => {
        getOneCarrier(id).then(carrier =>{
            setCarrier(carrier)
            console.log(carrier)
            setLoaded(true)
        })
    }, [id]);
  return (
      <Box>
          <Box sx={style.CarrierHolder} id={"CarrierHolder"}>
              <Box sx={{backgroundColor: "primary", p:5, mb:5, width: ["100%", "25%", "25%", "25%", "25%", "25%", "25%"]}}>
                  {loaded && <CarrierCard {...carrier } ></CarrierCard>}
              </Box>
              <Box sx={{backgroundColor: "primary", p:5, width: "80%", overflow: "auto", overflowX: "hidden"}}>
                  {loaded && <TabsWidget tabs={tabs} categories={categories}></TabsWidget>}
              </Box>
          </Box>
          <Box sx={style.GalleryHolder} id={"GalleryHolderContainer"}>
              <Box sx={{width: "100%", display: "flex", justifyContent: "right", alignItems: "center"}}>
                  <AiFillCloseCircle
                      size={"2em"} style={{marginRight: "20px"}}
                      onClick={()=>{
                          let CarrierHolder = document.getElementById("CarrierHolder");
                          let GalleryHolder = document.getElementById("GalleryHolder");
                          let GalleryHolderContainer = document.getElementById("GalleryHolderContainer");
                          CarrierHolder.style.display= "flex"
                          GalleryHolderContainer.style.display= "none"



                      }}
                  ></AiFillCloseCircle>
              </Box>
              <Box id={"GalleryHolder"}>

              </Box>
          </Box>
      </Box>
  )
}


const CarrierAbout = ({carrier})=>{
    try {
        return(
            <Box>


                <Box sx={{display: "flex", flexDirection: "column", mb: 5}}>
                    <StyledText  sx={{fontSize: "25px"}}>The company</StyledText>
                    <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                        <PortableText blocks={carrier.company.description} serializers={Serializer} />
                    </Text>
                </Box>
                <br/>
                <br/>
                <Box>
                    <StyledText  sx={{fontSize: "25px"}}>The role</StyledText>
                    <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                        <PortableText blocks={carrier.content} serializers={Serializer} />
                    </Text>
                    <Box sx={{flexDirection: 'row', backgroundColor: "", width: "100%", display: "flex", marginLeft: "20px", alignItems: "center"}}>
                        <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", flexWrap: "wrap"}}>
                            {
                                carrier.skills.map((skill, i) =>{
                                    return (<SkillTag name={skill} key={i}></SkillTag>)
                                })
                            }
                        </Box>
                    </Box>
                </Box>

            </Box>
        )
    }catch (e){
        return (<Box></Box>)
    }

}

const CompanyCard = ({company})=>{
    try {
        return(

                <Flex sx={{display: "flex", flexDirection: "row", mb: 5, ml: 5}} >
                    <Flex sx={{flexDirection: "column", mr: 5}}>
                        <StyledText  sx={{fontSize: "25px"}}>{company.name}</StyledText>
                        <Box sx={
                            {
                                display: "flex",  alignContent: "center", flexDirection: "column"
                            }
                        }>
                            {
                                company.contactInfo.map((entry, i)=>{
                                    switch (entry.type.type){
                                        case "Web":
                                            return    <a key={i} href={entry.link} target={"_blank"}><Text  > {entry.link}</Text></a>
                                            break;
                                        case "Mail":
                                            return    <a key={i} href={"mailto://"+entry.link} target={"_blank"}><Text>{entry.link}</Text></a>
                                            break;
                                        case "phone":
                                            return       <Text key={i}  ><a href={"tel://"+entry.link} target={"_blank"}><AiFillPhone></AiFillPhone></a> </Text>
                                            break;
                                    }
                                })
                            }


                        </Box>
                    </Flex>
                    <Box sx={{width: "60%"}}>
                        <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                            <PortableText blocks={company.description} serializers={Serializer} />
                        </Text>
                        <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                            <PortableText blocks={company.description} serializers={Serializer} />
                        </Text>
                    </Box>


                </Flex>

        )
    }catch (e){
        return (<Box></Box>)
    }

}

const CarrierProjects = ({projects})=>{

    try {
        return(
            <Carousel
                arrows={false}
                autoPlay={false}
                autoPlaySpeed={100000}
                centerMode={false}
                draggable={true}
                focusOnSelect={false}

                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={true}
                responsive={responsive}
                slidesToSlide={1}
                showDots={true}
                renderDotsOutside={true}
            >
                {projects.map((project, i) => (
                    <Project {...project} key={"project"+i}/>
                ))}
            </Carousel>
        )
    }catch (e){
        return (<Box></Box>)
    }

}
