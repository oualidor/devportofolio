
import  { useState, useEffect } from 'react';

import {Box, Container, Text} from "theme-ui";
import StyledText from '../../../components/StyledComponents/StyledText';
import SkillTag from '../../../components/SkillTag/SkillTag';

const ProfessionalData = [
    {
        year: "2012 - 2015", degree: "Front end devolper", spec:  "Front end devolper", school:  "",
        skills : [
            {name: "HTML", level: 90},
            {name: "CSS", level: 100},
            {name: "JavaScript", level: 100},
            {name: "JQuery", level: 100},
        ]
    },
    {
        year: "2015 - 2017", degree: 'Front end devolper, ', spec:  "Modjib Digital", school:  "",
        skills : [
            {name: "HTML", level: 90},
            {name: "CSS", level: 100},
            {name: "JavaScript", level: 100},
            {name: "PHP", level: 100},
            {name: "MySQL", level: 100},
            {name: "Wordpress", level: 100},
        ]
    },
    {
        year: "2018 - 2020", degree: 'Full Stack Developper, ', spec:  "El Manaheel School",
        skills : [
            {name: "ReactJS", level: 90},
            {name: "ElectronJS", level: 100},
            {name: "PostgreSQL", level: 100},
            {name: "React Native", level: 100},
            {name: "ExpressJS", level: 100},
            {name: "SQLite", level: 100},
            {name: "NestJS", level: 100},
            {name: "Redux", level: 100},
        ]
    },
    {
        year: "2020 - 2022", degree: 'Tech Lead, ', spec:  "YourIT Deparmtent", school: "",
        skills : [
            {name: "HTML / CSS / JS", level: 100},
            {name: "Team Leading", level: 100},
            {name: "ReactJS", level: 90},
            {name: "NextJS", level: 100},
            {name: "ExpressJS", level: 100},
            {name: "Redux", level: 100},
            {name: "Project Planing", level: 100},
            {name: "GCP", level: 100},
            {name: "AWS", level: 100},
        ]
    }

];

const CareerEntry = ({skills, start, end, degree, spec, school}) =>{

    return (
      <Box sx={{
          display: "flex", flexDirection: 'row',
          width: "100%", px: 100, my: 5,
          backgroundColor: "", justifyContent: "space-between",
          boxShadow: "5px 10px 10px #0F1620", border: "5px solid #0F1620"
        }
          }>
            <Box sx={{display: "flex", backgroundColor: "", flexDirection: "row", alignItems: 'center'}}>
               <Entry
                    start={start}
                    degree={degree}
                    school={school}
                    spec={spec}
               />
            </Box>
            <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", width: "60%", flexWrap: "wrap", justifyContent: "space-around"}}>
            {
                skills.map(skill =>{
                    return (<SkillTag name={skill.name}></SkillTag>)
                })
            }
            </Box>

      </Box>
    )
  }

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
                    <Box sx={{display: "flex", flexDirection: 'column', width: "100%", backgroundColor: "tran", marginBottom: 5, p: 4}}>
                        <StyledText  sx={{marginLeft: "5px", fontSize: "24px"}}>{"Tech Expertise"}</StyledText>
                        <Text variant='muted' sx={{marginLeft: "20px", fontSize: "18px"}}>
                            Basically,  I am good with any thing based on Node and Javascript en term of experience but,
                             I do believe that I do have a good understanding of the philosophy behind giving orders
                             to the computer and problem solving, I can adapt
                        </Text>
                        <StyledText  sx={{marginLeft: "5px", fontSize: "24px"}}>{"No tech"}</StyledText>
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

