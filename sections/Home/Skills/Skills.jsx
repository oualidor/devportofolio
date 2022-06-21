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

function Skills(){
    useState(()=>{

    }, [])


    return(
        <Box sx={{}}>

            <StyledText variant="sectionTitle">About Me</StyledText>
            <br></br>
            <Text variant='muted' sx={{marginLeft: "20px", fontSize: "18px"}}>
            </Text>
            <Box sx={{
                flexDirection: ["column", "column", "column", "column", "row", "row", "row"],
                width: "100%",
                display: "flex",
                justifyContent: 'space-around', alignItems: 'center', flexWrap: "", ml: 5,
                '&::-webkit-scrollbar': { width: 0, }
                }}>

                <Box sx={{display: "flex", flexDirection: 'column', width: "100%", backgroundColor: "tran", marginBottom: 5}}>
                    <StyledText  sx={{marginLeft: "5px", fontSize: "24px"}}>{"Languages"}</StyledText>
                    <LanguageEntry name={"Arabic"} level={"Native"}></LanguageEntry>
                    <LanguageEntry name={"English"} level={"Adnaced (A1)"}></LanguageEntry>
                    <LanguageEntry name={"French"} level={"Very good (B2)"}></LanguageEntry>
                </Box>
                <Box sx={{display: "flex", flexDirection: 'column', width: "100%", backgroundColor: "tran", marginBottom: 5, pr: 6}}>

                    <StyledText  sx={{marginLeft: "5px", fontSize: "24px"}}>{"No tech Expertise"}</StyledText>
                    <Text variant='muted' sx={{marginLeft: "20px", fontSize: "18px"}}>
                    I am a social element with a good ability to work alone or in a team, I can supervise people or get supervised.
                    I can be integrated silently in any tech community. I would really appreciate having time for study and swimming
                    </Text>
                </Box>
            </Box>
        </Box>
    )

}

export default Skills

