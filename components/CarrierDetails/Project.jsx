import {AiFillDollarCircle} from "react-icons/ai";
import {FaBriefcase} from "react-icons/fa";
import StyledText from "../StyledComponents/StyledText";
import {Box, Text} from "theme-ui";
import PortableText from "@sanity/block-content-to-react";
import SkillTag from "../SkillTag/SkillTag";
import ImageGallery from "../image-gallery"
import TabsWidget from "../TabsWidget/TabsWidget";
import {Serializer} from "../../services/_SanityClient";
import DataParser from "../../Apis/DateParser";
import dateParser from "../../Apis/DateParser";

const Project = ({name, from, to, title, skills, content, outcome, images}) =>{
    const imagess= [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
    const categories = [
        {
            id: 0,
            title : "About",
            icon: AiFillDollarCircle
        },
        {
            id: 1,
            title : "Gallery",
            icon: FaBriefcase
        }
    ]
    const tabs = [
        {
            id: 0,
            component:
                <>

                </>
        },
        {
            id: 1,
            component:
                <>
                    <Box>
                        <ImageGallery items={imagess} />
                    </Box>
                </>
        }
    ]

    return (
        <Box sx={{display: "flex", flexDirection: 'column',  backgroundColor: "",  width: "100%"}}>
            <StyledText variant="timeLineTitle">{title + " [ "+ DataParser.toString(from) + " - " +dateParser.toString(to) + " ]"}</StyledText>
            <br></br>
            <StyledText  sx={{marginLeft: "20px", fontSize: "26px"}}>Description</StyledText>
            <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                <PortableText blocks={content} serializers={Serializer} />
            </Text>
            <br></br>
            <StyledText  sx={{marginLeft: "20px", fontSize: "26px"}}>Project out come</StyledText>
            <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                <PortableText blocks={outcome} serializers={Serializer} />
            </Text>
            <br></br>
            <StyledText  sx={{marginLeft: "20px", fontSize: "26px"}}>Skills used</StyledText>
            <Box sx={{
                overflowX: ["auto", "auto", "auto", "none", "none", "none", "none"],
                marginLeft: "20px",
                width: "100%",
                display: "flex", flexDirection: ['row', 'row', 'row', 'row', 'row', 'row', 'row'],
                alignItems: 'center', flexWrap: "wrap",
                '&::-webkit-scrollbar': { width: 0, }
            }}>
                {
                    skills.map(skill =>{
                        return (<SkillTag name={skill.title} ></SkillTag>)
                    })
                }
            </Box>
        </Box>
    )
}


export default Project
