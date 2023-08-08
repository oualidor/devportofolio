import { Container} from "theme-ui";


const MeetScheduler = ({meetId}) => {

    return(
        <Container sx={{height: "100%", py: 1}}>
            <iframe src={'https://calendly.com/oualidkhial/' +meetId} title="description" style={{width: "100%", height: "100%", border: 0}}></iframe>
        </Container>

    )

}

export  default MeetScheduler
