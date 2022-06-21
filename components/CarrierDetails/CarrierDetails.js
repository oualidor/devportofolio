import {useEffect, useState} from "react";
import { AiFillDollarCircle, AiFillPieChart } from 'react-icons/ai';
import { FaBriefcase, FaCog } from 'react-icons/fa';

import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
import ImageGallery from "../../components/image-gallery"
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

const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <Text>kjghkjhkj</Text>;
};



export default function CarrierDetails({id}) {

    let [carrier, setCarrier] = useState({skills: [], company: {}, projects: [{images: []}]})
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
            display: "none", backgroundColor: "primary", width: "85vw", height: "85vh", p:1, overflow: "auto", overflowX: "hidden",
            flexDirection: ["column", "column", "column", "column", "row", "row", "row"], alignItems: "center", justifyContent: "center"
        }
    }

    useEffect(() => {


        getOneCarrier(id).then(carrier =>{
            setCarrier(carrier)
            setLoaded(true)
        })
    }, [id]);
    const imagess= [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
  return (
      <Box>
          <Box sx={style.CarrierHolder} id={"CarrierHolder"}>
              <Box sx={{backgroundColor: "primary", p:5, mb:5, width: ["100%", "25%", "25%", "25%", "25%", "25%", "25%"]}}>
                  {loaded && <CarrierCard {...carrier } ></CarrierCard>}
              </Box>
              <Box sx={{backgroundColor: "primary", p:5, width: "80%"}}>
                  {loaded && <TabsWidget tabs={tabs} categories={categories}></TabsWidget>}
              </Box>
          </Box>
          <Box sx={style.GalleryHolder} id={"GalleryHolder"}>
              <ImageGallery items={imagess} />
          </Box>
      </Box>

  )
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
                {projects.map((project) => (
                    <Project {...project} />
                ))}
            </Carousel>
        )
    }catch (e){
        return (<Box></Box>)
    }

}
