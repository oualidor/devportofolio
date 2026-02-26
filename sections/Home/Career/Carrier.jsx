'use client';

import { useState, useEffect } from 'react';
import ShowMoreText from "react-show-more-text";
import { Alert, Box, Button, Container, Spinner, Text } from "theme-ui";
import StyledText from '../../../components/StyledComponents/StyledText';
import SkillTag from '../../../components/SkillTag/SkillTag';
import { getCarrier } from '../../../services';
import { motion } from "framer-motion"
import { useDispatch } from "react-redux";
import { MountBackDrop } from "../../../src/Apis/Redux/Actions/Types";
import { useRouter } from "next/navigation";
import ButtonGroup from "../../../components/button-group";
import Carousel from "react-multi-carousel";
import MultiStatesView from "../../../components/MultiStatesView/MultiStatesView";
import CarrierDetails from "../../../components/CarrierDetails/CarrierDetails";
import SectionTitle from "../../../components/StyledComponents/SectionTitle";
import { useBreakpointIndex } from "@theme-ui/match-media";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";





const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1619 },
        items: 3,
        slidesToSlide: 4, // optional, default to 1.
    },
    laptop: {
        breakpoint: { max: 1619, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};
const CarrierCard = ({ id, date, end, role, tags, company, skills }) => {
    let dispatch = useDispatch()
    let router = useRouter()

    const sx = {
        Container: {
            display: "flex", flexDirection: 'column', backgroundColor: "", my: 5, py: 5, pl: 5, mx: 5, cursor: "pointer", boxShadow: '0px 0px 10px rgba(38, 78, 118, 0.35)',
            transition: 'all 0.3s',
            '&:hover': {
                boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
            }
        },
        role: {
            marginLeft: "20px", fontSize: ['18px', '18px', '18px', '18px', '18px', '20px', '20px']
        },
        tagsCon: {
            marginLeft: "20px",
            display: "flex", flexDirection: ['row', 'row', 'row', 'row', 'row', 'row', 'row'],
            alignItems: 'center', flexWrap: "wrap",
            '&::-webkit-scrollbar': { width: 0, }
        }
    }

    const clickHandler = () => {
        dispatch({ type: MountBackDrop, Component: <CarrierDetails id={id} />, props: {}, test: "hi" })
        window.history.pushState(null, '', "/?carrierId=" + id)
    }

    return (
        <Box sx={sx.Container} onClick={clickHandler}>
            <StyledText variant="timeLineTitle">{date}</StyledText>
            <StyledText sx={sx.role}>{role}</StyledText>
            <StyledText variant='muted' sx={{ marginLeft: "20px", fontSize: "24px" }}>{"@ " + company}</StyledText>
            <br></br>
            <Box sx={sx.tagsCon}>
                {
                    tags.map((tag, i) => {
                        return (<SkillTag name={tag} style={{ color: "white", borderColor: "white" }} key={i} />)
                    })
                }
            </Box>
            <Box sx={sx.tagsCon}>
                {
                    skills.map((skill, index) => {
                        if (index < 3) {
                            return (<SkillTag name={skill} key={index}></SkillTag>)
                        }

                    })
                }
            </Box>
        </Box>
    )
}


function Carrier({ title, text, careerData = [] }) {
    let [data, setData] = useState([])
    let [state, setState] = useState(0)
    const index = useBreakpointIndex()
    const sx = {
        container: {

            '.entriesContainer': {
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: '',
            }
        }
    }
    const loadData = () => {
        setState(0)
        if (careerData && careerData.length > 0) {
            setData(careerData)
            setState(1)
        } else {
            setState(-1)
        }
    }
    useEffect(() => {

        loadData()
    }, [careerData])


    return (

        <Box sx={sx.container} id={"Carrier"}>

            <SectionTitle variant="sectionTitle">{title}</SectionTitle>
            <br></br>
            <Text variant='muted' sx={{ marginLeft: "20px", fontSize: "18px" }}>
                <ShowMoreText
                    /* Default options */
                    lines={3}
                    more="See More"
                    less="Show less"
                    className="content-css"
                    anchorClass="my-anchor-css-class"
                    expanded={false}
                    truncatedEndingComponent={" .... "}
                >
                    {text}
                </ShowMoreText>

            </Text>
            <Box sx={{
                position: 'relative', width: "100%",
                justifyContent: 'center', alignItems: 'center', flexWrap: "wrap",
                backgroundColor: '', overflowX: "hidden", overflowY: "hidden"
            }}>
                <br></br>
                <MultiStatesView state={state} dataLoader={loadData}>
                    <motion.div
                        style={{ position: "absolute", top: '45%' }}
                        initial={{ left: '20%', opacity: 1 }}
                        whileInView={{ left: '-20%', opacity: 0 }}
                        transition={{ duration: 1.5, type: "tween" }}
                    >
                        <Box sx={{
                            color: 'white',
                            display: ['block', 'block', 'block', 'none', 'none', 'none', 'none']
                        }}>
                            <AiFillCaretLeft size={40} color={'white'}></AiFillCaretLeft>
                        </Box>
                    </motion.div>
                    <motion.div
                        style={{ position: "absolute", top: '45%' }}
                        initial={{ left: '25%', opacity: 1 }}
                        whileInView={{ left: '-15%', opacity: 0 }}
                        transition={{ duration: 1.5, type: "tween" }}
                    >
                        <Box sx={{
                            color: 'white',
                            display: ['block', 'block', 'block', 'none', 'none', 'none', 'none']
                        }}>
                            <AiFillCaretLeft size={40} color={'white'}></AiFillCaretLeft>
                        </Box>
                    </motion.div>
                    <Carousel
                        autoPlay={false} infinite={false} responsive={responsive}
                        arrows={false} renderButtonGroupOutside
                        customButtonGroup={index >= 3 ? <ButtonGroup /> : null}
                        sliderClass="entriesContainer" draggable
                        focusOnSelect={false} keyBoardControl


                        slidesToSlide={1}
                    >
                        {
                            data.map((entry, index) => (<CarrierCard
                                key={entry._id}
                                id={entry._id}
                                skills={entry.skills}
                                date={entry.date}
                                role={entry.title}
                                company={entry.company.name}
                                tags={entry.tags}
                                desc={entry.content}
                            ></CarrierCard>)
                            )
                        }
                    </Carousel>
                    <motion.div
                        style={{ position: "absolute", top: '45%' }}
                        initial={{ right: '20%', opacity: 1 }}
                        whileInView={{ right: '-20%', opacity: 0 }}
                        transition={{ duration: 1.5, type: "tween" }}
                    >
                        <Box sx={{
                            color: 'white',
                            display: ['block', 'block', 'block', 'none', 'none', 'none', 'none']
                        }}>
                            <AiFillCaretRight size={40} color={'white'}></AiFillCaretRight>
                        </Box>
                    </motion.div>
                    <motion.div
                        style={{ position: "absolute", top: '45%' }}
                        initial={{ right: '25%', opacity: 1 }}
                        whileInView={{ right: '-15%', opacity: 0 }}
                        transition={{ duration: 1.5, type: "tween" }}
                    >
                        <Box sx={{
                            color: 'white',
                            display: ['block', 'block', 'block', 'none', 'none', 'none', 'none']
                        }}>
                            <AiFillCaretRight size={40} color={'white'}></AiFillCaretRight>
                        </Box>
                    </motion.div>

                </MultiStatesView>
            </Box>
        </Box>


    )

}


export default Carrier




