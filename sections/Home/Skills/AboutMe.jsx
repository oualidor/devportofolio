import {Box, Container, Text} from "theme-ui";
import StyledText from '../../../components/StyledComponents/StyledText';
import SkillTag from "../../../components/SkillTag/SkillTag";
import SectionTitle from "../../../components/StyledComponents/SectionTitle";

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

function AboutMe(){

    const Style = {
        SkillTag: {
            color: "white", borderColor: "white", marginBottom: 10,
        }
    }
    return(
        <Box sx={{overflow: "hidden"}} id={"AboutMe"}  as={"section"} variant={'section.PageSection'}>
            <SectionTitle variant="sectionTitle">About Me</SectionTitle>
            <br/>
            <Box sx={{
                flexDirection: "column",
                width: "100%",
                display: "flex",
                justifyContent: 'space-around',   ml: 0,
                '&::-webkit-scrollbar': { width: 0, }
                }}>
                <Text variant='muted' sx={{marginLeft: "20px", fontSize: "16px", textJustify: 'inter-word', textAlign: "justify"}}>
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
                    <Box sx={{display: "flex", flexDirection: 'column', width: "100%", backgroundColor: "", marginBottom: 0}}>
                        <StyledText  sx={{marginLeft: "5px", fontSize: "24px"}}>{"Technical Overview"}</StyledText>
                        <Box sx={{display: "flex", flexDirection: 'row', width: "100%", maxWidth: 300, backgroundColor: "tran", ml:5, flexWrap: "wrap"}}>
                            <SkillTag name={'Web Development'} style={Style.SkillTag}  />
                            <SkillTag name={'NodeJS'} style={Style.SkillTag}/>
                            <SkillTag name={'Linux'} style={Style.SkillTag}/>
                            <SkillTag name={'Problem Solving'} style={Style.SkillTag}/>
                            <SkillTag name={'ReactJS / NextJS'} style={Style.SkillTag}/>
                            <SkillTag name={'C / C++'} style={Style.SkillTag}/>
                            <SkillTag name={'TenserFlow'} style={Style.SkillTag}/>
                            <SkillTag name={'HTML / CSS'} style={Style.SkillTag}/>
                            <SkillTag name={'Neural Network'} style={Style.SkillTag}/>
                        </Box>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: 'column', width: "100%", backgroundColor: "tran", marginBottom: 0}}>
                        <StyledText  sx={{marginLeft: "5px", fontSize: "24px"}}>{"Languages"}</StyledText>
                        <LanguageEntry name={"Arabic"} level={"Native"}></LanguageEntry>
                        <LanguageEntry name={"English"} level={"Adnaced (A1)"}></LanguageEntry>
                        <LanguageEntry name={"French"} level={"Very good (B2)"}></LanguageEntry>
                    </Box>

                </Box>


            </Box>
        </Box>
    )

}

export default AboutMe

