
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
import CarrierDetails from "../../../components/CarrierDetails/CarrierDetails";
import {useRouter} from "next/router";

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


const CarrerCard = ({date, end, role, tags, company, skills}) =>{

    return (
    <Box sx={{display: "flex", flexDirection: 'column',  backgroundColor: "", marginBottom: 5}}>
        <StyledText variant="timeLineTitle">{date}</StyledText>
        <StyledText  sx={{marginLeft: "20px", fontSize: "26px"}}>{role}</StyledText>
        <StyledText variant='muted' sx={{marginLeft: "20px", fontSize: "24px"}}>{"@ " + company}</StyledText>
        <br></br>
        <Box sx={{
                overflowX: ["auto", "auto", "auto", "none", "none", "none", "none"],
                marginLeft: "20px",
                width: "100%",
                display: "flex", flexDirection: ['row', 'row', 'row', 'row', 'row', 'row', 'row'],
                alignItems: 'center', flexWrap: "wrap",
                '&::-webkit-scrollbar': { width: 0, }
                }}>
                       {
                tags.map(tag =>{
                    return (<SkillTag name={tag} style={{color: "white", borderColor: "white"}}></SkillTag>)
                })
        }
        </Box>
        <Box sx={{flexDirection: 'row', backgroundColor: "", display: "flex", width: "100%", marginLeft: "20px"}}>
            <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", width: "100%", flexWrap: "wrap"}}>
            {
                skills.map(skill =>{
                    return (<SkillTag name={skill}></SkillTag>)
                })
            }
            </Box>
        </Box>

    </Box>
    )
}

const CareerEntry = ({id, skills, date, role, tags, company, desc}) =>{
    let dispatch = useDispatch()
    let router = useRouter()

    return (

            <Box
                onClick={()=>{
                    dispatch({type: MountBackDrop, Component: <CarrierDetails id={id}/> , props:{} ,test: "hi"})
                    router.push("/?carrierId="+id, undefined, { shallow: true })

                }}
                sx={{
                    display: "flex", flexDirection: 'row',
                    width: "100%",
                    backgroundColor: "", justifyContent:  ['center', 'center', 'center', 'center', "space-between", "space-between", "space-between"] ,  alignItems: "center",
                    boxShadow: '0px 6px 10px rgba(38, 78, 118, 0.1)',
                    p: 2,
                    mb: 2
                }
                }>


                <CarrerCard
                    date={date}
                    role={role}
                    company={company}
                    tags={tags}
                    desc={desc}
                    skills={skills}
                />

                <Box sx={{
                    display: ['none', 'none', 'none', 'none', 'flex', 'flex', 'flex'],
                    flexDirection: 'row', alignItems: "center", width: "60%", flexWrap: "wrap", justifyContent: "space-around"
                }}>
                    <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", width: "100%", flexWrap: "wrap", justifyContent: "space-around"}}>
                        <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                            <PortableText blocks={desc} serializers={serializer} />
                        </Text>
                    </Box>


                </Box>


            </Box>


    )
}



function Career(){
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

            <Box sx={{backgroundColor: "", cursor: "pointer"}}>

                <StyledText variant="sectionTitle">Skills & Profesional Carrer</StyledText>
                <br></br>
                <Text variant='muted' sx={{marginLeft: "20px", fontSize: "18px"}}>
                    Basically, I am good with all teh technologies labeled i used in the projects bellow, But, I do believe that I do have a good understanding of the philosophy behind giving orders
                    to the computer and problem solving, I can adapt
                </Text>
                <Box sx={{
                    width: "100%",
                    display: "flex", flexDirection: ['row', 'column', 'column', 'row', 'row', 'row', 'colmun'],
                    justifyContent: 'space-around', alignItems: 'center', flexWrap: "wrap",
                    '&::-webkit-scrollbar': { width: 0, }
                }}>
                    {
                        data.map((entry, index) =>{

                            if(index < limit){
                                return (<CareerEntry
                                    id={entry._id}
                                    skills={entry.skills}
                                    date={entry.date}
                                    role={entry.title}
                                    company={entry.company.name}
                                    tags={entry.tags}
                                    desc={entry.content}
                                ></CareerEntry>)
                            }

                        })
                    }
                </Box>
                <Box sx={{display: "flex", backgroundColor: "", alignItems: "center", justifyContent: "right"}}>
                    <Button
                        sx={{display: "flex", backgroundColor: "", alignItems: "center", justifyContent: "right"}}
                        variant="textButton"
                        onClick={()=> {
                            setLimit(primaryLimit == limit? 10 : primaryLimit)}
                        }
                    >
                        <Text sx={{mr: 1, color: "white"}}>
                            {primaryLimit == limit? "Full LIst": "Show Less" }
                        </Text><GoLinkExternal style={{color: "white"}}></GoLinkExternal>
                    </Button>
                </Box>
            </Box>


    )

}


 export default Career




