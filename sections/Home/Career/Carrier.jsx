
import  { useState, useEffect } from 'react';

import {Alert, Box, Button, Container, Spinner, Text} from "theme-ui";
import StyledText from '../../../components/StyledComponents/StyledText';
import SkillTag from '../../../components/SkillTag/SkillTag';
import { getCarrier, getCategories } from '../../../services';
import PortableText from "@sanity/block-content-to-react";
import { GoLinkExternal } from "react-icons/go";
import NextLink from "next/link";
import {useDispatch} from "react-redux";
import {MountBackDrop} from "../../../src/Apis/Redux/Actions/Types";
import SingleCarrierDetails from "../../../components/CarrierDetails/SingleCarrierDetails/SingleCarrierDetails";
import {useRouter} from "next/router";
import ButtonGroup from "../../../components/button-group";
import Carousel from "react-multi-carousel";
import MultiStatesView from "../../../components/MultiStatesView/MultiStatesView";
import CarrierDetails from "../../../components/CarrierDetails/CarrierDetails";
import SectionTitle from "../../../components/StyledComponents/SectionTitle";





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
const CarrierCard = ({id, date, end, role, tags, company, skills}) =>{
    let dispatch = useDispatch()
    let router = useRouter()
    return (
    <Box
        sx={{display: "flex", flexDirection: 'column',  backgroundColor: "", my: 5, py: 5, pl: 5, mx: 5, cursor: "pointer",   boxShadow: '0px 0px 10px rgba(38, 78, 118, 0.35)',
            transition: 'all 0.3s',
            '&:hover': {
                boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
            }}
    }
        onClick={()=>{
            dispatch({type: MountBackDrop, Component: <CarrierDetails id={id}/> , props:{} ,test: "hi"})
            router.push("/?carrierId=" + id, undefined, {shallow: true}).then(r => {})

        }}
    >
        <StyledText variant="timeLineTitle">{date}</StyledText>
        <StyledText  sx={{marginLeft: "20px", fontSize: "26px"}}>{role}</StyledText>
        <StyledText variant='muted' sx={{marginLeft: "20px", fontSize: "24px"}}>{"@ " + company}</StyledText>
        <br></br>
        <Box sx={{
                marginLeft: "20px",
                display: "flex", flexDirection: ['row', 'row', 'row', 'row', 'row', 'row', 'row'],
                alignItems: 'center', flexWrap: "wrap",
                '&::-webkit-scrollbar': { width: 0, }
                }}>
                       {
                tags.map((tag, i) =>{
                    return (<SkillTag name={tag} style={{color: "white", borderColor: "white"}}      key={i}></SkillTag>)
                })
        }
        </Box>
        <Box sx={{flexDirection: 'row', backgroundColor: "", display: "flex", width: "100%", marginLeft: "20px"}}>
            <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", width: "100%", flexWrap: "wrap"}}>
            {
                skills.map((skill, index) =>{
                    if(index < 3){
                        return (<SkillTag name={skill} key={index}></SkillTag>)
                    }

                })
            }
            </Box>
        </Box>

    </Box>
    )
}


function Carrier(){
    const primaryLimit = 2
    let [data, setData ] = useState([])
    let [state, setState ] = useState(0)

    const loadData = ()=>{
        setState(0)
        getCarrier().then(careerData =>{
            setData(careerData)
            setState(1)

        }).catch(e =>{
            setState(-1)
            console.log(e)
        })
    }
    useEffect( ()=>{

        loadData()
    }, [])


    return(

            <Box sx={{backgroundColor: "", }} id={"Carrier"}>

                <SectionTitle variant="sectionTitle">Skills & Professional Carrier</SectionTitle>
                <br></br>
                <Text variant='muted' sx={{marginLeft: "20px", fontSize: "18px"}}>
                    Basically, I am good with all teh technologies labeled i used in the projects bellow, But, I do believe that I do have a good understanding of the philosophy behind giving orders
                    to the computer and problem solving, I can adapt
                </Text>
                <Box sx={{
                    width: "100%",
                    justifyContent: 'space-around', alignItems: 'center', flexWrap: "wrap",
                    '&::-webkit-scrollbar': { width: 0, }
                }}>

                    <MultiStatesView state={state} dataLoader={loadData}>
                        <Carousel
                            additionalTransfrom={0}
                            arrows={false}
                            autoPlaySpeed={30000000}
                            centerMode={false}
                            customButtonGroup={<ButtonGroup />}
                            draggable
                            focusOnSelect={false}
                            infinite={false}
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside
                            responsive={responsive}
                            showDots={false}
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
                    </MultiStatesView>

                </Box>

            </Box>


    )

}


 export default Carrier




