import {Box, Text} from "theme-ui";
import StyledText from "../StyledComponents/StyledText";
import PortableText from "@sanity/block-content-to-react";
import {Serializer} from "../../services/_SanityClient";
import SkillTag from "../SkillTag/SkillTag";

const CarrierAbout = ({carrier})=>{
    try {
        return(
            <Box>


                <Box sx={{display: "flex", flexDirection: "column", mb: 5}}>
                    <StyledText  sx={{fontSize: "25px"}}>The company</StyledText>
                    <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                        <PortableText blocks={carrier.company.description} serializers={Serializer} />
                    </Text>
                </Box>
                <br/>
                <br/>
                <Box>
                    <StyledText  sx={{fontSize: "25px"}}>The role</StyledText>
                    <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                        <PortableText blocks={carrier.content} serializers={Serializer} />
                    </Text>
                    <Box sx={{flexDirection: 'row', backgroundColor: "", width: "100%", display: "flex", marginLeft: "20px", alignItems: "center"}}>
                        <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", flexWrap: "wrap"}}>
                            {
                                carrier.skills.map((skill, i) =>{
                                    return (<SkillTag name={skill} key={i}></SkillTag>)
                                })
                            }
                        </Box>
                    </Box>
                </Box>

            </Box>
        )
    }catch (e){
        return (<Box></Box>)
    }

}

export default CarrierAbout
