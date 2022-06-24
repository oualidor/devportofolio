
import {Box, Button, Container, Flex, Text} from 'theme-ui';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import React, {forwardRef, useEffect, useState} from "react";
import {getPerson} from "../../services";
import {urlFor} from "../../services/_SanityClient";
import {AiFillPhone, AiOutlineIe, AiOutlineMail} from "react-icons/ai";
import CvCarrier from "./CvCarrier";
import CvEducation from "./CvEducation";
import StyledText from "../StyledComponents/StyledText";
import QRCode from "react-qr-code";
import Me from "../../src/assets/Images/me.jpeg"
import SkillTag from "../SkillTag/SkillTag";
const LanguageEntry = ({name, level}) =>{

    return (
        <Box sx={{display: "flex", flexDirection: 'row', width: "100%", backgroundColor: "tran", marginBottom: "1px", alignItems: "center"}}>
            <Text  sx={{marginLeft: "0px", fontSize: "14px"}}>{name}</Text>
            <Text variant='muted' sx={{marginLeft: "5px", fontSize: "12px"}}>{level}</Text>
        </Box>
    )
}
const SectionHeader = ({title, qrValue}) =>{
    const sx = {
        container: { borderBottom: "2px solid", borderColor: "red", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}
    }
    return(
        <Box sx={sx.container}>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <Text>{title}</Text>
                {qrValue !== undefined && <Text sx={{fontSize: "10px"}}>Please scan Qr Code or refer to oualidkhial.me for details and projects:</Text>}
            </Box>

            {qrValue !== undefined && <QRCode value={qrValue} size={30}/>}
        </Box>
    )
}
export const CV = forwardRef((props, ref) => {

    let [person, setPerson] = useState({contactInfo: [], company: {}, projects: [{images: []}]})
    let skills = ["Web Development", "NodeJS", "ReactJS", "NextJS", "NestJS", "Linux", "Teaching", "Problem Solving", "Team Work", "Scientific research"]
    useEffect(() => {
        getPerson().then(person =>{
            setPerson(person)

        })
    }, []);
    const sx = {
        container: { position: "absolute", top: 0, left: 0, width: "21cm", height: "29.7cm", backgroundColor: "white", padding: 2, display: "flex", zIndex: -11, },
        left: { width: "35%", height: "100%", backgroundColor: "white", padding: 5},
        right: { width: "64%", height: "100%", backgroundColor: "", padding: 5},
        imageHolder: { width: "100%", height: "7cm", backgroundColor: ""},
    }
    return (


        <Box ref={ref} sx={sx.container} id={"cvContainer"}>
            <Box sx={sx.left}>
                <Box sx={sx.imageHolder}>
                    <img src={Me} width={"100%"} height={"100%"}/>
                </Box>
                <Text sx={{fontSize: "26px"}}>{person.name} {person.lName}</Text><br/>
                <Text></Text>
                <Text>{person.excerpt}</Text>
                <br/><br/><br/>
                <SectionHeader title={"Contact Info"}/>
                <Box sx={
                    {
                        display: "flex",  alignContent: "center", flexDirection: "column"
                    }
                }>
                    {
                        person.contactInfo.map((entry, i)=>{
                            switch (entry.type.type){
                                case "Web":
                                    return   <Flex sx={{alignItems: "center"}}><AiOutlineIe/> <Text>{entry.link}</Text></Flex>
                                    break;
                                case "Mail":
                                    return    <Flex sx={{alignItems: "center"}}><AiOutlineMail/> <Text>{entry.link}</Text></Flex>
                                    break;
                                case "Phone":
                                    return     <Flex sx={{alignItems: "center"}}><AiFillPhone/> <Text>{entry.link}</Text></Flex>
                                    break;
                            }
                        })
                    }


                </Box>
                <br/>
                <SectionHeader title={"Languages"}/>
                <LanguageEntry name={"Arabic"} level={"Native"}></LanguageEntry>
                <LanguageEntry name={"English"} level={"Advanced (A1)"}></LanguageEntry>
                <LanguageEntry name={"Arabic"} level={"Very Good (B2)"}></LanguageEntry>
                <br/>
                <SectionHeader title={"Primary Skills"}/>
                <br/>
                <Box sx={{flexDirection: 'row', backgroundColor: "", width: "100%", display: "flex",  alignItems: "center"}}>
                    <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", flexWrap: "wrap"}}>
                        {
                            skills.map((skill, i) =>{
                                if(i < 10){
                                    return (<SkillTag name={skill} key={i}  style={{fontSize: "10px"}} props={{size: "small"}}></SkillTag>)
                                }

                            })
                        }
                    </Box>
                </Box>
            </Box>
            <Box sx={sx.right}>
                <SectionHeader title={"About Me"}/>
                <Text sx={{fontSize: "11px", lineHeight: 1}}>I am a Full stack developer, An artificial intelligence and machine learning PhD researcher and a computer science teacher,
                    I have been talking to computers since I was 12 years old and I still enjoy It. Basically I am good with NodeJS based technologies (React, Next Nest, ..)
                    But, I do believe i have a good understanding of the philosophy behind giving instruction to computers, I can adapt</Text>
                <br/>         <br/>
                <SectionHeader title={"Professional Carrier"} qrValue={"https://oualidkhial.me/?carrier"}/>
                <CvCarrier></CvCarrier>
                <br/>
                <SectionHeader title={"Academic Education"}/>
                <CvEducation></CvEducation>
            </Box>
            <Box sx={{position: "absolute", top: "97%", width: "100%"}}>
                <Box sx={{mb: "1px"}}>
                    <Text sx={{fontSize: "12px"}}>Issued on { new Date().toDateString()}, Please refer to https://oualidkhial.me for updated version of this document</Text>
                </Box>
            </Box>

        </Box>


    );
})
