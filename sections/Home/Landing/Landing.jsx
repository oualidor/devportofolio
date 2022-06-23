import { useResponsiveValue, useBreakpointIndex } from '@theme-ui/match-media'
import React, {useState, useEffect, useRef, forwardRef} from 'react';

import {Box, Button, Container, Image, Text} from "theme-ui";
import StyledText from '../../../components/StyledComponents/StyledText';
import {useDispatch} from "react-redux";
import { useThemeUI } from 'theme-ui'
import {MountBackDrop} from "../../../src/Apis/Redux/Actions/Types";
import MeetScheduler from "../../../components/MeetScheduler";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ReactToPrint, {PrintContextConsumer} from "react-to-print";
import {CV} from "../../../components/CV/CV";
import BackgroundAnimation from "../../../components/BackgroundAnimation";
import domtoimage from 'dom-to-image';




function Landing(){
    function printDocument() {
        const input = document.getElementById('cvContainer');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF( {orientation: "p", unit: "cm",});
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save(document.title+".pdf");
            })
        ;

    }
    const imageHolderRef = useRef(null)
    const context = useThemeUI()
    const dispatch = useDispatch()
    const index = useBreakpointIndex()
    const ref = useRef();
    const style = {
        con :{

            width: "100%", display: "flex", flexDirection: ["column-reverse", "column-reverse", "column-reverse", "column-reverse", "row", "row", "row"],
            py: ["20vh", "20vh", "20vh", "20vh", "10vh", "10vh", "10vh"],
            height: ["100vh", "20vh", "auto", "auto", "auto", "auto", "auto"],
        },
        left: {
            width: ["100%", "100%", "100%", "100%",  "50%", "50%", "50%"],  display: "flex",  flexDirection: "column", justifyContent: "center",
            alignItems:  ["center", "center", "center", "flex-start",  "flex-start", "flex-start", "flex-start"],
        },
        right : {

            width: "50%",
            transition: "1s ease",
            display:  index <= 3 ? "none": "block",

        }

    }

    useEffect(()=>{


    }, [index])
    useState(()=>{

    }, [])


    return(
        <>
            {/*<CV ref={ref} ></CV>*/}
            <Box sx={style.con}>

                <Box sx={style.left}>
                    <StyledText variant="fullAndHalf">There is a lot that I dont know <br></br> </StyledText>
                    <StyledText sx={{}} variant={"fullAndHalf"}>But I am always learning</StyledText>
                    <br></br>

                    <Text sx={{fontSize: ["5vw", "4vw", "4vw", "4vw", "2vw", "2vw", "2vw"],     backgroundColor: "",    textAlign: [
                            'center',
                            'center',
                            'center',
                            'left',
                            'left',
                            'left',
                            'left',

                        ],}}>
                        I am a Full stack developer, A PhD researcher and a computer science teacher</Text>
                    <br></br>
                    <Box sx={{display: "flex", backgroundColor: ""}}>
                        <Button
                            sx={{mr: 3}} variant='whiteButton'
                            onClick={()=> {
                                dispatch({type: MountBackDrop, Component: <MeetScheduler/> , props:{} ,test: "hi"})
                            }}
                        >
                            Schedule a meet
                        </Button>

                        {/*<ReactToPrint*/}
                        {/*    trigger={() =>          <Button*/}
                        {/*        variant='secondary'*/}
                        {/*        onClick={()=> {*/}
                        {/*            printDocument()*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        Download CV*/}
                        {/*    </Button>}*/}
                        {/*    content={() => ref.current}*/}
                        {/*/>*/}
                        <Button
                            variant='secondary'
                            onClick={()=> {
                                // printDocument()
                            }}
                        >
                            Download CV
                        </Button>
                    </Box>
                </Box>
                <Box sx={style.right} ref={imageHolderRef}>
                    <BackgroundAnimation />
                </Box>
            </Box>
        </>

    )

}
 export default Landing

