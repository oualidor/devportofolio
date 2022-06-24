
import  { useState, useEffect } from 'react';

import {Box, Button, Container, Text} from "theme-ui";
import StyledText from '../../../components/StyledComponents/StyledText';
import SkillTag from '../../../components/SkillTag/SkillTag';
import { getCarrier, getCategories } from '../../../services';
import PortableText from "@sanity/block-content-to-react";
import { GoLinkExternal } from "react-icons/go";
import NextLink from "next/link";
import {useDispatch} from "react-redux";
import {MountBackDrop} from "../../../src/Apis/Redux/Actions/Types";
import SingleCarrierDetails from "../../../components/SingleCarrierDetails/SingleCarrierDetails";
import {useRouter} from "next/router";
import ButtonGroup from "../../../components/button-group";
import Carousel from "react-multi-carousel";



const CodeBlock = ({code, lang}) =>{


    return(
        <pre data-language={lang} style={{direction: "ltr"}} >
          <code style={{direction: "ltr"}}>

            {code}

          </code>
        </pre>
    )
  }

const serializer = {
    types: {
      mainImage: props => (
          <figure>
            <img
                src={urlFor(props.asset)
                    .width(600)
                    .url()}
                alt={props.node.alt}
            />

            <figcaption>{props.node.caption}</figcaption>
          </figure>
      ),
      code: props => {
        return(<CodeBlock lang={props.node.language} code={props.node.code}></CodeBlock>)}
    }
  };

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
        sx={{display: "flex", flexDirection: 'column',  backgroundColor: "", marginBottom: 5, ml: 20, cursor: "pointer"}}
        onClick={()=>{
            dispatch({type: MountBackDrop, Component: <SingleCarrierDetails id={id}/> , props:{} ,test: "hi"})
            router.push("/?carrierId="+id, undefined, { shallow: true })

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
    let [limit, setLimit ] = useState(primaryLimit)
    useEffect( ()=>{
        getCarrier().then(careerData =>{
            setData(careerData)

        }).catch(e =>{
            console.log(e)
        })

    }, [])


    return(

            <Box sx={{backgroundColor: "", }} id={"Carrier"}>

                <StyledText variant="sectionTitle">Skills & Profesional Carrer</StyledText>
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

                </Box>

            </Box>


    )

}


 export default Carrier




