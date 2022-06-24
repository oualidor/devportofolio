import {AiFillDollarCircle} from "react-icons/ai";
import {FaBriefcase} from "react-icons/fa";

import StyledText from "../StyledComponents/StyledText";
import {Box, Button, Text} from "theme-ui";
import PortableText from "@sanity/block-content-to-react";
import SkillTag from "../SkillTag/SkillTag";
import ImageGallery from "../image-gallery"
import TabsWidget from "../TabsWidget/TabsWidget";
import {Serializer, urlFor} from "../../services/_SanityClient";
import DataParser from "../../Apis/DateParser";
import dateParser from "../../Apis/DateParser";
import {GoLinkExternal} from "react-icons/go";
import Carousel from "react-multi-carousel";
import {render} from "react-dom";
import {useEffect, useState} from "react";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1619 },
        items: 6,
        slidesToSlide: 6, // optional, default to 1.
    },
    laptop: {
        breakpoint: { max: 1619, min: 1024 },
        items: 6,
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
const Project = ({name, from, to, title, skills, content, outcome, images}) =>{

    let [preparedImages, setImages] = useState([])
    useEffect(()=>{

        if(images !== undefined && images !== null){
            setImages( images.map((im =>{
                return    {
                    original: urlFor(im),
                    thumbnail: urlFor(im),
                }
            })))
        }


    }, [images])
    return (
        <Box sx={{display: "flex", flexDirection: 'column',  backgroundColor: "",  width: "100%", lineHeight: 1}} id={"projecttt"}>
            <StyledText variant="timeLineTitle"  sx={{fontSize: "20px",  lineHeight: 1}}>{title}</StyledText>
            <StyledText variant="timeLineTitle" sx={{fontSize: "18px"}}>{"[ "+ DataParser.toString(from) + " - " +dateParser.toString(to) + " ]"}</StyledText>
            <br></br>
            <StyledText  sx={{marginLeft: "20px", fontSize: "26px"}}>Description</StyledText>
            <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                <PortableText blocks={content} serializers={Serializer} />
            </Text>
            <br></br>
            <StyledText  sx={{marginLeft: "20px", fontSize: "26px"}}>Project out come</StyledText>
            <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                <PortableText blocks={outcome} serializers={Serializer} />
            </Text>
            <br></br>
            <StyledText  sx={{marginLeft: "20px", fontSize: "26px"}}>Skills used</StyledText>
            <Box sx={{
                overflowX: ["auto", "auto", "auto", "none", "none", "none", "none"],
                marginLeft: "20px",
                width: "100%",
                display: "flex", flexDirection: ['row', 'row', 'row', 'row', 'row', 'row', 'row'],
                alignItems: 'center', flexWrap: "wrap",
                '&::-webkit-scrollbar': { width: 0, }
            }}>
                {
                    skills.map(skill =>{
                        return (<SkillTag name={skill.title} ></SkillTag>)
                    })
                }
            </Box>
        </Box>
    )
}

const ProjectImages = ({images})=>{

    try {
        return(
            <Carousel
                arrows={true}
                autoPlay={false}
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={true}
                responsive={responsive}
                slidesToSlide={1}
                showDots={false}
                renderDotsOutside={true}
            >
                {
                    images.map((project) => (
                        <img src={urlFor(project)} style={{height: "150px", width: "150px"}}/>
                    ))
                }
            </Carousel>
        )
    }catch (e){
        return (<Box></Box>)
    }

}


export default Project
