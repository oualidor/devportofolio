import {Box, Text} from "theme-ui";
import StyledText from "../../StyledComponents/StyledText";
import SkillTag from "../../SkillTag/SkillTag";
import {AiFillLinkedin, AiFillPhone, AiOutlineMail} from "react-icons/ai";

const CarrierCard = ({date, end, title, tags, company, skills}) =>{

    const CompanyInfo = ({contactInfo})=>{

        try {
            return (
                <Box sx={
                    {
                        fontSize: "18px", flexDirection: "column",
                        marginLeft: "20px",
                        display: "flex",  alignContent: "center"
                    }}
                >
                    {contactInfo.map((entry, i)=>{
                        switch (entry.type.type){
                            case "Web":
                            return    <a key={i} href={entry.link} target={"_blank"}><Text  > {entry.link}</Text></a>
                            break;
                            case "Mail":
                            return    <a key={i} href={"mailto://"+entry.link} target={"_blank"}><Text>{entry.link}</Text></a>
                            break;
                            case "phone":
                            return       <Text key={i}  ><a href={"tel://"+entry.link} target={"_blank"}><AiFillPhone></AiFillPhone></a> </Text>
                            break;
                        }
                    })}
                </Box>
                )
        }catch (e){
            return (<Box></Box>)
        }
    }
    return (
        <Box sx={{display: "flex", flexDirection: 'column',  backgroundColor: "", marginBottom: 5,}}>
            <StyledText variant="timeLineTitle">{date}</StyledText>
            <StyledText  sx={{marginLeft: "20px", fontSize: "26px"}}>{title}</StyledText>
            <StyledText variant='muted' sx={{marginLeft: "20px", fontSize: "24px"}}>{"@ " + company.name}</StyledText>
            <CompanyInfo contactInfo={company.contactInfo}></CompanyInfo>
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
