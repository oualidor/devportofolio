import {Box, Button, Text} from "theme-ui";
import Carousel from "react-multi-carousel";
import Project from "./Project";
import ButtonGroup from "../button-group";
import StyledText from "../StyledComponents/StyledText";
import DataParser from "../../Apis/DateParser";
import dateParser from "../../Apis/DateParser";
import {useEffect, useState} from "react";
import {IoIosArrowRoundBack} from "react-icons/io";
import {useBreakpointIndex} from "@theme-ui/match-media";
import {motion} from "framer-motion";
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";


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

const CarrierProjects = ({projects})=>{
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const index = useBreakpointIndex()
    const sx ={
        tabsCon: {
            display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", borderTop: '1px solid white', borderBottom: '1px solid white', boxShadow: '0px 0px 20px rgba(38, 78, 118, 0.35)'
        },
        inactive : {color: 'whitesmoke', cursor: 'pointer'},
        active : {textDecoration: 'underline', color: 'whitesmoke', lineHeight: '50px'}
    }

    useEffect(() => {
        return () => {

        };
    }, []);


    const project = projects[selectedProjectIndex]
    const Next = () => {
        if(selectedProjectIndex < projects.length -1){
            setSelectedProjectIndex(selectedProjectIndex + 1)
        }
    }
    const Previous = () => {
        if(selectedProjectIndex > 0){
            setSelectedProjectIndex(selectedProjectIndex + -1)
        }
    }
    try {
        if(projects.length === 0 ){
            return (<Box></Box>)
        }else {
            return(
                <>
                    {
                        index >= 4 &&
                        <Box sx={{display: "flex", flexDirection: "column",}}>
                            <Box sx={sx.tabsCon}>
                                <Box onClick={Previous} sx={{maxWidth: '30%', width: '30%', backgroundColor: ""}}>
                                    {
                                        selectedProjectIndex > 0 ?
                                            <Text sx={sx.inactive}>{projects[selectedProjectIndex-1].title}</Text>:
                                            <Box sx={sx.inactive}></Box>
                                    }
                                </Box>
                                <Box sx={{textAlign: "center"}}>
                                    <StyledText variant="timeLineTitle" sx={sx.active}>{project.title}</StyledText>
                                    <br/>
                                    <Text sx={{color: "white"}}>{DataParser.toString(project.from) + " - " + dateParser.toString(project.to)}</Text>
                                </Box>
                                <Box onClick={Next}  sx={{maxWidth: '30%', width: '30%', backgroundColor: "", textAlign: "right"}}>
                                    {selectedProjectIndex < projects.length-1 ? <Text sx={sx.inactive}>{projects[selectedProjectIndex+1].title}</Text>: <Box sx={sx.inactive}></Box>}
                                </Box>
                            </Box>
                            <br/>
                            <Project {...project} key={"project"}/>
                        </Box>

                    }
                    {
                        index < 4 &&
                        <>
                            <motion.div
                                style={{position: "absolute", top: '45%'}}
                                initial={{left: '20%', opacity: 1}}
                                whileInView={{left: '-20%', opacity: 0}}
                                transition={{duration: 1.5, type: "tween"}}
                            >
                                <div style={{color: 'white'}}>
                                    <AiFillCaretLeft size={40} color={'white'}></AiFillCaretLeft>
                                </div>
                            </motion.div>
                            <motion.div
                                style={{position: "absolute", top: '45%'}}
                                initial={{left: '25%', opacity: 1}}
                                whileInView={{left: '-15%', opacity: 0}}
                                transition={{duration: 1.5, type: "tween"}}
                            >
                                <div style={{color: 'white'}}>
                                    <AiFillCaretLeft size={40} color={'white'}></AiFillCaretLeft>
                                </div>
                            </motion.div>
                            <Carousel
                                additionalTransfrom={0}
                                arrows={false}
                                autoPlaySpeed={30000000}
                                draggable
                                focusOnSelect={false}
                                infinite={false}
                                itemClass=""
                                keyBoardControl
                                minimumTouchDrag={80}
                                renderDotsOutside={true}
                                responsive={responsive}
                                showDots={true}
                                slidesToSlide={1}
                            >
                                {
                                    projects.map((project, index) =>{
                                        return <Project {...project} key={"project"}/>
                                    })
                                }
                            </Carousel>
                            <motion.div
                                style={{position: "absolute", top: '45%'}}
                                initial={{right: '20%', opacity: 1}}
                                whileInView={{right: '-20%', opacity: 0}}
                                transition={{duration: 1.5, type: "tween"}}
                            >
                                <div style={{color: 'white'}}>
                                    <AiFillCaretRight size={40} color={'white'}></AiFillCaretRight>
                                </div>
                            </motion.div>
                            <motion.div
                                style={{position: "absolute", top: '45%'}}
                                initial={{right: '25%', opacity: 1}}
                                whileInView={{right: '-15%', opacity: 0}}
                                transition={{duration: 1.5, type: "tween"}}
                            >
                                <div style={{color: 'white'}}>
                                    <AiFillCaretRight size={40} color={'white'}></AiFillCaretRight>
                                </div>
                            </motion.div>
                        </>

                    }

                </>


            )

        }

    }catch (e){
        return (<Box></Box>)
    }

}

export default CarrierProjects
