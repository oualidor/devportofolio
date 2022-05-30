
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
  
const Entry = ({start, end, degree, spec, school}) =>{

    return (
    <Box sx={{display: "flex", flexDirection: 'column', width: "100%", backgroundColor: "tran", marginBottom: 5}}>
        <StyledText variant="timeLineTitle">{start}</StyledText>
        <Text variant='muted' sx={{marginLeft: "20px"}}>{degree}</Text>
        <Text variant='muted' sx={{marginLeft: "20px"}}>{spec}</Text>
        <Text variant='muted' sx={{marginLeft: "20px"}}>{school}</Text>
    </Box>
    )
  }
function ShowRoom(){
    useState(()=>{

    }, [])


    return(
        <Box sx={{}}>

            <StyledText variant="sectionTitle">Show Room </StyledText>
            <StyledText sx={{}}>Selection  of projetcs I worked on</StyledText>
            <Box sx={{
                overflowX: ["auto", "auto", "auto", "none", "none", "none", "none"],
                height:  ["200px", "200px", "100%"],
                width: "100%",
                display: "flex", flexDirection: ['column', 'column', 'column', 'row', 'row', 'row', 'row'], 
                justifyContent: 'space-around', alignItems: 'center', flexWrap: "wrap",
                '&::-webkit-scrollbar': { width: 0, }
                }}>
      
            </Box>
        </Box>
    )
  
} 
 export default ShowRoom
  
