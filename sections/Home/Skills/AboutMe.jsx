import {Box, Container, Text} from "theme-ui";
import StyledText from '../../../components/StyledComponents/StyledText';
import SkillTag from "../../../components/SkillTag/SkillTag";
import SectionTitle from "../../../components/StyledComponents/SectionTitle";
import ShowMoreText from "react-show-more-text";
import { motion } from "framer-motion"
const LanguageEntry = ({name, level}) =>{

    return (
        <Box sx={{display: "flex", flexDirection: 'row', width: "100%", backgroundColor: "tran", marginBottom: 5, alignItems: "center"}}>
            <StyledText  sx={{marginLeft: "40px", fontSize: ['18px', '18px', '18px', '18px', '18px', '20px', '26px'],}}>{name}</StyledText>
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

function AboutMe(){
    const sx = {
        content: {
            flexDirection: "column",
            width: "100%",
            display: "flex",
            justifyContent: 'space-around',   ml: 0,
            '&::-webkit-scrollbar': { width: 0, }
        },
        blocks: {
            position: "relative", flexDirection: ["column", "column", "row", "row", "row", "row", "row"], width: "100%", display: "flex",
            justifyContent: 'space-around',  flexWrap: "", ml: '15px',
            '&::-webkit-scrollbar': { width: 0, }
        },
        skillsCon: {
            display: "flex", flexDirection: 'column', width: "100%", backgroundColor: "", marginBottom: 0
        },
        languagesCon: {display: "flex", flexDirection: 'column', width: "100%", backgroundColor: "tran", marginBottom: 0},
        h2:{
            marginLeft: "5px", fontSize: ['20px', '20px', '18px', '18px', '18px', '20px', '26px']
        }
    }
    const Style = {
        SkillTag: {
            color: "white", borderColor: "white", marginBottom: 10,
        },

    }
    return(
        <Box sx={{overflow: "hidden"}} id={"AboutMe"}  as={"section"} variant={'section.PageSection'}>
            <SectionTitle variant="sectionTitle">About Me</SectionTitle>
            <br/>
            <Box sx={sx.content}>
                <Text variant='muted' sx={{marginLeft: "20px", fontSize: "16px", textJustify: 'inter-word', textAlign: "justify"}}>
                    <ShowMoreText
                        /* Default options */
                        lines={3}
                        more="More"
                        less="Show less"
                        className="content-css"
                        anchorClass="my-anchor-css-class"
                        expanded={false}
                        truncatedEndingComponent={" .... "}
                    >
                        I have been talking to computers since I was 12 years old and I still enjoy It.
                        I am a social element with a good ability to work alone or in a team, I can supervise people or get supervised.
                        I can be integrated silently in any tech community. I would really appreciate having time for study and swimming
                    </ShowMoreText>

                </Text>
                <Box sx={sx.blocks}>
                    <Box sx={sx.skillsCon}>
                        <StyledText  sx={sx.h2}>{"Technical Overview"}</StyledText>
                        <Box sx={{display: "flex", flexDirection: 'row', width: "100%", maxWidth: 300, backgroundColor: "tran", ml:5, flexWrap: "wrap"}}>
                            <SkillTag name={'Web Development'} style={Style.SkillTag}  />
                            <SkillTag name={'NodeJS'} style={Style.SkillTag}/>
                            <SkillTag name={'Linux'} style={Style.SkillTag}/>
                            <SkillTag name={'Problem Solving'} style={Style.SkillTag}/>
                            <SkillTag name={'ReactJS / NextJS'} style={Style.SkillTag}/>
                            <SkillTag name={'C / C++'} style={Style.SkillTag}/>
                            <SkillTag name={'Pytorch / TenserFlow'} style={Style.SkillTag}/>
                            <SkillTag name={'HTML / CSS'} style={Style.SkillTag}/>
                            <SkillTag name={'Neural Network'} style={Style.SkillTag}/>
                        </Box>
                    </Box>
                    <Box sx={sx.languagesCon}>
                        <StyledText  sx={sx.h2}>{"Languages"}</StyledText>
                        <LanguageEntry name={"Arabic"} level={"Native"}></LanguageEntry>
                        <LanguageEntry name={"English"} level={"Advanced (A2)"}></LanguageEntry>
                        <LanguageEntry name={"French"} level={"Very good (B2)"}></LanguageEntry>
                    </Box>
                </Box>
            </Box>
        </Box>
    )

}

export default AboutMe

