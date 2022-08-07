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
import NextLink from "next/link";
import {AiFillLinkedin, AiFillPhone, AiOutlineMail} from "react-icons/ai";
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
const Project = ({name, from, to, title, skills, content, outcome, images, links}) =>{
    if (links == undefined){ links = []}

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
        <Box sx={{display: "flex", flexDirection: 'column',  backgroundColor: "",  width: "100%"}} id={"project"}>
            <StyledText variant="timeLineTitle">{title + " [ "+ DataParser.toString(from) + " - " +dateParser.toString(to) + " ]"}</StyledText>
            <br></br>
            <StyledText  sx={{marginLeft: "20px", fontSize: "26px"}}>Description</StyledText>
            <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                <PortableText blocks={content} serializers={Serializer} />
            </Text>
            <Box
                sx={{display: "flex", backgroundColor: "", alignItems: "flex-end", justifyContent: "right", mr: '10%'}}>
                {
                    links.map((entry, i)=>{
                        switch (entry.type.type){
                            case "Web":
                                return <Button variant={'whiteButton'} sx={{mr: 5, display: "flex"}}>
                                    <a href={entry.link} target={'_blank'}>
                                        Visit
                                    </a>
                                    <GoLinkExternal style={{marginLeft: 5}} size={20}/>
                                </Button>
                                break;
                            case "mail":
                                return    <Text key={i}><a href={"mailto://"+entry.link} target={"_blank"}><AiOutlineMail></AiOutlineMail></a> </Text>
                                break;
                            case "phone":
                                return <Text key={i} ><a href={"tel://"+entry.link} target={"_blank"}><AiFillPhone/></a></Text>
                                break;
                        }
                    })
                }

                <Button variant='secondary' >Gallery</Button>
            </Box>
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
