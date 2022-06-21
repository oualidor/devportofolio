import {Box} from "theme-ui";
import StyledText from "../StyledComponents/StyledText";
import SkillTag from "../SkillTag/SkillTag";

const CarrierCard = ({date, end, title, tags, company, skills}) =>{

    return (
        <Box sx={{display: "flex", flexDirection: 'column',  backgroundColor: "", marginBottom: 5,}}>
            <StyledText variant="timeLineTitle">{date}</StyledText>
            <StyledText  sx={{marginLeft: "20px", fontSize: "26px"}}>{title}</StyledText>
            <StyledText variant='muted' sx={{marginLeft: "20px", fontSize: "24px"}}>{"@ " + company.name}</StyledText>
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

        </Box>
    )
}

export default CarrierCard
