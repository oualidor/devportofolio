import  { useState, useEffect } from 'react';

import {Box, Container, Text} from "theme-ui";
import StyledText from '../../../components/StyledComponents/StyledText';
import SkillTag from '../../../components/SkillTag/SkillTag';

const LanguageEntry = ({name, level}) =>{

    return (
        <Box sx={{display: "flex", flexDirection: 'row', width: "100%", backgroundColor: "tran", marginBottom: 5, alignItems: "center"}}>
            <StyledText  sx={{marginLeft: "40px", fontSize: "26px"}}>{name}</StyledText>
            <Text variant='muted' sx={{marginLeft: "20px", fontSize: "18px"}}>{level}</Text>
        </Box>
    )
}

const SkillEntry = ({name, level}) =>{

    return (
        <Box sx={{display: "flex", flexDirection: 'row', width: "100%", backgroundColor: "tran", marginBottom: 5, alignItems: "center"}}>
            <StyledText  sx={{marginLeft: "40px", fontSize: "18px", lineHeight: 1.2}}>{name}</StyledText>
            <Text variant='muted' sx={{marginLeft: "20px", fontSize: "16px", lineHeight: 1}}>{level}</Text>
        </Box>
    )
}

function Skills(){


    return(
        <Box sx={{overflow: "hidden"}} id={"AboutMe"}>
            <StyledText variant="sectionTitle">About Me</StyledText>
            <br/>
            <Box sx={{
                flexDirection: "column",
                width: "100%",
                display: "flex",
                justifyContent: 'space-around',   ml: 0,
                '&::-webkit-scrollbar': { width: 0, }
                }}>
                <Text variant='muted' sx={{marginLeft: "20px", fontSize: "16px"}}>
                    I have been talking to computers since I was 12 years old and I still enjoy It.
                     I am a social element with a good ability to work alone or in a team, I can supervise people or get supervised.
                    I can be integrated silently in any tech community. I would really appreciate having time for study and swimming
                </Text>
                <Box sx={{
                    flexDirection: ["column", "column", "column", "column", "row", "row", "row"],
                    width: "100%",
                    display: "flex",
                    justifyContent: 'space-around',  flexWrap: "", ml: 5,
                    '&::-webkit-scrollbar': { width: 0, }
                }}>
                    <Box sx={{display: "flex", flexDirection: 'column', width: "100%", backgroundColor: "tran", marginBottom: 5}}>
                        <StyledText  sx={{marginLeft: "5px", fontSize: "24px"}}>{"Languages"}</StyledText>
                        <LanguageEntry name={"Arabic"} level={"Native"}></LanguageEntry>
                        <LanguageEntry name={"English"} level={"Adnaced (A1)"}></LanguageEntry>
                        <LanguageEntry name={"French"} level={"Very good (B2)"}></LanguageEntry>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'column', width: "100%", backgroundColor: "tran", marginBottom: 5}}>
                        <StyledText  sx={{marginLeft: "5px", fontSize: "24px"}}>{"Skills Overview"}</StyledText>
                        <SkillEntry name={"Windows"} level={"18 years"}></SkillEntry>
                        <SkillEntry name={"Linux"} level={"7 years"}></SkillEntry>
                        <SkillEntry name={"Amateur Coding"} level={"16 years"}></SkillEntry>
                        <SkillEntry name={"Professional Coding"} level={"6 years"}></SkillEntry>
                    </Box>
                </Box>


            </Box>
        </Box>
    )

}

export default Skills

