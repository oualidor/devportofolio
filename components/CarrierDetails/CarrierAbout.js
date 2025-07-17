import {Box, Text} from "theme-ui";
import StyledText from "../StyledComponents/StyledText";
import PortableText from "@sanity/block-content-to-react";
import {Serializer} from "../../services/_SanityClient";
import SkillTag from "../SkillTag/SkillTag";
import ShowMoreText from "react-show-more-text";

const CarrierAbout = ({carrier})=>{

    const sx={
        Container:{
            display: "flex", flexDirection: "column", mb: 5,
            '.mobileOnly' : {
                display: [null, null, null, null, 'none', "none", "none"]
            },
            '.largeOnly' : {
                display: ['none', 'none', 'none', 'none', 'block', 'block', 'block']
            }
        }
    }
    try {
        return(
            <Box>


                <Box sx={sx.Container}>

                    {/*The role*/}
                    <StyledText  sx={{fontSize: "25px", mt: 5}}>The role</StyledText>
                    <Box  className={'largeOnly'}>
                        <Text sx={{ textIndent: "2vw"}} variant={"muted"} >
                            <PortableText blocks={carrier.content} serializers={Serializer}/>
                        </Text>
                    </Box>
                    <Box className={'mobileOnly'}>
                        <Text sx={{ textIndent: "2vw"}} variant={"muted"} >
                            <ShowMoreText
                                /* Default options */
                                lines={3}
                                more="Show more"
                                less="Show less"
                                className="content-css"
                                anchorClass="my-anchor-css-class"
                                expanded={false}
                                truncatedEndingComponent={"... "}
                            >
                                <PortableText blocks={carrier.content} serializers={Serializer}/>
                            </ShowMoreText>
                        </Text>
                    </Box>
                    <br/>
                    <Box sx={{flexDirection: 'row', backgroundColor: "", width: "100%", display: "flex", marginLeft: "20px", alignItems: "center"}}>
                        <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", flexWrap: "wrap"}}>
                            {
                                carrier.skills.map((skill, i) =>{
                                    return (<SkillTag name={skill} key={i}></SkillTag>)
                                })
                            }
                        </Box>
                    </Box>

                    {/*Company*/}
                    {

                        <>
                            <StyledText  sx={{fontSize: "25px"}}>The company</StyledText>
                            <Box  className={'largeOnly'}>
                                <Text sx={{ textIndent: "2vw"}} variant={"muted"} >
                                    <PortableText blocks={carrier.company.description} serializers={Serializer}/>
                                </Text>
                            </Box>
                            <Box className={'mobileOnly'}>
                                <Text sx={{ textIndent: "2vw"}} variant={"muted"} >
                                    <ShowMoreText
                                        /* Default options */
                                        lines={3}
                                        more="Show more"
                                        less="Show less"
                                        className="content-css"
                                        anchorClass="my-anchor-css-class"
                                        expanded={false}
                                        truncatedEndingComponent={"... "}
                                    >
                                        <PortableText blocks={carrier.company.description} serializers={Serializer}/>
                                    </ShowMoreText>
                                </Text>
                            </Box>
                            <br/>
                        </>
                    }
                </Box>

            </Box>
        )
    }catch (e){
        return (<Box></Box>)
    }

}

export default CarrierAbout
