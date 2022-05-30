
import  { useState, useEffect } from 'react';

import {Box, Button, Container, Text} from "theme-ui";
import StyledText from '../../../components/StyledComponents/StyledText';
import SkillTag from '../../../components/SkillTag/SkillTag';
import { getCarrer, getCategories } from '../../../services';
import PortableText from "@sanity/block-content-to-react";
import { GoLinkExternal } from "react-icons/go";
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
  
const ProfessionalData = [
    { 
        year: "2012 - 2015", role: "Front end devolper", tags:  "Free Lancer", company:  "Part Time, Remote", 
        skills : [
            {name: "HTML", level: 90},
            {name: "CSS", level: 100}, 
            {name: "JavaScript", level: 100}, 
            {name: "JQuery", level: 100}, 
        ], 
        desc: " As a freelancer, I used to get projects from UpWork and Freelancer web sites, I worked on many small projects such as static web sites and landing pages for individual or micro dateups. It was a great oportunity for me to practice the basics of and skills that I have and most important it makes me understand the skills that need to learn more and makes me feel why a real production projects need team work and colaboration  "
    },
    { 
        year: "Sep 2015 - April 2017", role: 'Front end devolper, ', tags:  "Modjib Digital", company:  "Part Time, Remote", 
        skills : [
            {name: "HTML", level: 90},
            {name: "CSS", level: 100}, 
            {name: "JavaScript", level: 100}, 
            {name: "PHP", level: 100}, 
            {name: "MySQL", level: 100}, 
            {name: "Wordpress", level: 100}, 
        ],
        desc: "This was my first time working under a tech superviser, At Mojib Digital L learned how to be respnsinle for mini taches that are supplies to me every week, We created a web sites for an educationl project that the company was working on, I was responsible of the front end implemantation. I alos created the landing web site of the application and re imlemeted the company web sites using reactJS and Material UI"
    },
    { 
        year: "Juin 2019 - Sep 2020", role: 'Full Stack Developper, ', tags:  "El Manaheel company", company:  "Full Time, Remote", 
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
        year: "August 2021 - Juin 2022", role: 'IT Consultant, ', tags:  "CBC Altec", company: "", 
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
    },
    { 
        year: "2020 - 2022", role: 'Tech Lead, ', tags:  "YourIT Deparmtent", company: "", 
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

const CareerEntry = ({skills, date, role, tags, company, desc}) =>{

    return (
      <Box sx={{
          display: "flex", flexDirection: 'row', 
          width: "100%", 
          backgroundColor: "", justifyContent:  ['center', 'center', 'center', 'center', "space-between", "space-between", "space-between"] ,  alignItems: "center",
          boxShadow: "5px 10px 10px #0F1620", border: "5px solid #0F1620"
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
                    <Text sx={{color: "white", textIndent: "2vw"}}>
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
        getCarrer().then(careerData =>{
        
            console.log(careerData)
            setData(careerData)
        }).catch(e =>{
            console.log(e)
        })
       
    }, [])


    return(
        <Box sx={{backgroundColor: ""}}>

            <StyledText variant="sectionTitle">Skills & Profesional Carrer</StyledText>
            <br></br>
    
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
                            skills={entry.skills}
                            date={entry.date}
                            role={entry.title}
                            company={entry.company}
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
  
