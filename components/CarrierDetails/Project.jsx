import StyledText from "../StyledComponents/StyledText";
import {Box, Button, Text} from "theme-ui";
import PortableText from "@sanity/block-content-to-react";
import SkillTag from "../SkillTag/SkillTag";
import {motion} from 'framer-motion'
import {Serializer, urlFor} from "../../services/_SanityClient";
import DataParser from "../../Apis/DateParser";
import dateParser from "../../Apis/DateParser";
import {GoLinkExternal} from "react-icons/go";
import Carousel from "react-multi-carousel";
import {render} from "react-dom";
import {useEffect, useRef, useState} from "react";
import NextLink from "next/link";
import {AiFillLinkedin, AiFillPhone, AiOutlineMail} from "react-icons/ai";
import * as PropTypes from "prop-types";
import ShowMoreText from "react-show-more-text";
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

function ProjectLinks({links}) {
    return <Box sx={{display: "flex", backgroundColor: "", alignItems: "flex-end", justifyContent: "right", mr: "1%", zIndex: 99999999999999999999}}>
        {
            links.map((entry, i) => {
                switch (entry.type.type) {
                    case "Web":
                        return <Button variant={'whiteButton'} sx={{mr: 5, display: "flex"}}>
                            <a href={entry.link} target={'_blank'}>
                                Visit
                            </a>
                            <GoLinkExternal style={{marginLeft: 5}} size={20}/>
                        </Button>
                        break;
                    case "mail":
                        return <Text key={i}><a href={"mailto://" + entry.link}
                                                target={"_blank"}><AiOutlineMail></AiOutlineMail></a> </Text>
                        break;
                    case "phone":
                        return <Text key={i}><a href={"tel://" + entry.link} target={"_blank"}><AiFillPhone/></a></Text>
                        break;
                }
            })
        }

        <Button variant="secondary">Gallery</Button>
    </Box>;
}
ProjectLinks.propTypes = {links: PropTypes.arrayOf(PropTypes.any)};


const Project = ({name, from, to, title, skills, content, outcome, images, links =  []}) =>{
    const [isVisible, setIsVisible] = useState(false);
    const container = useRef(null);
    useEffect(() => {
        setTimeout(()=>{
            setIsVisible(true)
        }, 3000)

        return () => {

        };
    }, []);

    const sx = {
        frame: {
            border: "2px solid #2E58A6",
            height: '90%',
            width: '90%',
            position: 'absolute',
            zIndex: -1
        },
        Container: {
            display: "flex", flexDirection: 'column',
            width: "100%",  mb: '20px', p: 1,
            backgroundColor: "",
            '.date': {
                lineWidth: 0, ml: '20px',
                fontSize: ['18px', '18px', '18px', '18px', '18px', '20px', '20px']
            },
            '.mobileOnly' : {
                display: [null, null, null, null, 'none', "none", "none"]
            }
        },
        title: {
            lineWidth: 0,
            fontSize: ['18px', '18px', '18px', '18px', '18px', '20px', '26px'],
            lineHeight: '0px'
        },

    }
    if(links == undefined) links = []

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
        <Box sx={sx.Container} id={"project"} ref={container}>
            <Box className={'mobileOnly'}>
                <StyledText sx={sx.title}>
                    {title}
                    <StyledText variant="timeLineTitle" sx={sx.date}>
                        {DataParser.toString(from) + " - " + dateParser.toString(to)}
                    </StyledText>
                </StyledText>
            </Box>
            <StyledText sx={{marginLeft: "20px", fontSize: "26px"}}>Description</StyledText>
            <Box sx={{ textIndent: "2vw"}} variant={"muted"}>
                    <PortableText blocks={content} serializers={Serializer}/>
            </Box>
            <Box sx={{ textIndent: "2vw"}} variant={"muted"}>
                <ShowMoreText
                    /* Default options */
                    lines={3}
                    more="Show more"
                    less="Show less"
                    className="content-css"
                    anchorClass="my-anchor-css-class"
                    expanded={false}
                    truncatedEndingComponent={"... "}
                >
                    <PortableText blocks={content} serializers={Serializer}/>
                </ShowMoreText>

            </Box>
            <br/>
            <Box sx={{
                overflowX: ["auto", "auto", "auto", "none", "none", "none", "none"],
                marginLeft: "20px",
                width: "100%",
                display: "flex", flexDirection: ['row', 'row', 'row', 'row', 'row', 'row', 'row'],
                alignItems: 'center', flexWrap: "wrap",
                '&::-webkit-scrollbar': {width: 0,}
            }}>
                {
                    skills.map(skill => {
                        return (<SkillTag name={skill.title}></SkillTag>)
                    })
                }
            </Box>
            <br/>
            <StyledText sx={{marginLeft: "20px", fontSize: "26px"}}>Project out come</StyledText>
            <PortableText blocks={outcome} serializers={Serializer}/>
            <br/>
            <ProjectLinks links={links}/>
    </Box>
    )
}



export default Project
