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
import NextLink from "next/link";
import {TemplateHandler} from "easy-template-x";
import {getCarrier} from "../../../services";




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

            display: "flex",
            flexDirection: ["column-reverse", "column-reverse", "column-reverse", "column-reverse", "row", "row", "row"],
            height: ["100vh", "100vh", "100vh", "100vh", "auto", "auto", "auto"],
            alignItems: 'center', justifyContent: 'center'
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
    let [carrierData, setCarrierData ] = useState([])
    useEffect(()=>{


    }, [index])
    useEffect( ()=>{
        getCarrier().then(careerData =>{
            console.log(careerData)
            careerData.forEach(entry=>{

                entry['company'] = entry['company']['name']
                entry['role'] = contentToText(entry['content'])
            })
            setCarrierData(careerData)

        }).catch(e =>{
            console.log(e)
        })

    }, [])
    useState(()=>{

    }, [])

    function contentToText(content){
        let result = ''
        content.forEach(entry=>{
            entry.children.forEach(child=>{
                result  =result + child.text
            })
        })

        return result

    }


    async function downloadCV() {
        const response = await fetch('CVTemplateFull.docx');
        const templateFile = await response.blob();

        const data = {
            fullName: 'Oualid KHIAL',
            desc: 'Full stack developer, PhD researcher and a computer science teacher',
            lang: [
                {name: 'Arabic', level: 'Native'},
                {name: 'English', level: 'Advanced'},
                {name: 'French', level: 'Advanced'},
            ],
            skills: [
                {name: 'Javascript'},
                {name: 'React / NextJS'},
                {name: 'Problem solving'},
                {name: 'Linux'},
                {name: 'Teaching'},
                {name: 'Scientific research'},
            ],
            AboutMe: 'I am a Full stack developer, An artificial intelligence and machine learning PhD researcher and a computer science teacher, ' +
                'I have been talking to computers since I was 12 years old and I still enjoy It. Basically I am good with NodeJS based technologies (React, Next Nest, ..)' +
                'But, I do believe i have a good understanding of the philosophy behind giving instruction to computers, I can adapt',
            educationalBackground : [
                { year: "Sep 2012 - Jun 2015", degree: 'Bachelors Degree , ', spec:  "Computer Science", school:  "Mouley TAHAR University, Saida"},
                { year: "2015 - 2017", degree: 'Master Degree, ', spec:  "Artificial Intelligence",school: "Mouley TAHAR University, Saida"},
                { year: "2019 - Now", degree: 'Phd Degree, ', spec:  "Modeling and optimization of computer systems", school: "Mustapha STAMBOULI Univeristy, Mascara"},
            ],


            carrierData,

            carrierDataL: carrierData.slice(0, 4),
            carrierDataR: carrierData.slice(4, 9),
            date: new Date().getDate() + ' ' + new Date().getMonth() + ' ' + new Date().getFullYear()
        };

        const handler = new TemplateHandler();
        const doc = await handler.process(templateFile, data);

        const blobUrl = URL.createObjectURL(doc);

        // create temp link element
        let link = document.createElement("a");
        link.download = 'CV.docx';
        link.href = blobUrl;

        // use the link to invoke a download
        document.body.appendChild(link);
        link.click();

        // remove the link
        setTimeout(() => {
            link.remove();
            window.URL.revokeObjectURL(blobUrl);
            link = null;
        }, 0);
    }
    return(
        <>

            <Box sx={style.con} id={"Landing"} variant={'section.PageSection'} as={"section"}>
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

                        >
                            <NextLink href={'/#AboutMe'}>
                                More Details
                            </NextLink>
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
                                downloadCV().then(r => {})
                            }}
                        >
                          Download CV

                        </Button>
                        {/*<Button*/}
                        {/*    variant='secondary'*/}
                        {/*    // onClick={()=> {*/}
                        {/*    //     printDocument()*/}
                        {/*    // }}*/}
                        {/*>*/}
                        {/*    <a href={'Oualid KHIAL, Full stack developer and tech teacher.pdf'} target={'_blank'}>Download CV</a>*/}

                        {/*</Button>*/}
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

