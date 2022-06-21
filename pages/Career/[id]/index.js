
import {useEffect, useState} from "react";

import { AiFillDollarCircle, AiFillPieChart } from 'react-icons/ai';
import { FaBriefcase, FaCog } from 'react-icons/fa';

import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
import ReactGA from 'react-ga';
import Router, {useRouter} from 'next/router';
import Landing from "../../../sections/Home/Landing/Landing";
import Career from "../../../sections/Home/Career/Career";
import {Box, Button, Container, Text} from "theme-ui";
import StyledText from "../../../components/StyledComponents/StyledText";
import SkillTag from "../../../components/SkillTag/SkillTag";
import {keyframes} from "@emotion/react";
import {getCarrier, getOneCarrier} from "../../../services";
import PortableText from "@sanity/block-content-to-react";
import Home from "../../index";

const CodeBlock = ({code, lang}) =>{


    return(
        <pre data-language={lang} style={{direction: "ltr"}} >
          <code style={{direction: "ltr"}}>

            {code}

          </code>
        </pre>
    )
}

const serializer = {
    types: {
        mainImage: props => (
            <figure>
                <img
                    src={urlFor(props.asset)
                        .width(600)
                        .url()}
                    alt={props.node.alt}
                />

                <figcaption>{props.node.caption}</figcaption>
            </figure>
        ),
        code: props => {
            return(<CodeBlock lang={props.node.language} code={props.node.code}></CodeBlock>)}
    }
};
export const initGA = () => {
    ReactGA.initialize('G-8L31KNNS3F');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};


const CarrerCard = ({date, end, title, tags, company, skills}) =>{

    return (
        <Box sx={{display: "flex", flexDirection: 'column',  backgroundColor: "", marginBottom: 5}}>
            <StyledText variant="timeLineTitle">{date}</StyledText>
            <StyledText  sx={{marginLeft: "20px", fontSize: "26px"}}>{title}</StyledText>
            <StyledText variant='muted' sx={{marginLeft: "20px", fontSize: "24px"}}>{"@ " + company}</StyledText>
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
            <Box sx={{flexDirection: 'row', backgroundColor: "", display: "flex", width: "100%", marginLeft: "20px"}}>
                <Box sx={{display: "flex", flexDirection: 'row', alignItems: "center", width: "100%", flexWrap: "wrap"}}>
                    {
                        skills.map(skill =>{
                            return (<SkillTag name={skill}></SkillTag>)
                        })
                    }
                </Box>
            </Box>

        </Box>
    )
}

const PortfolioGallery = ({tabs}) => {
    const [tabIndex, setTabIndex] = useState(0);

    const categories = [
        {
            id: 0,
            title : "Description",
            icon: AiFillDollarCircle
        },
        {
            id: 2,
            title : "Team members",
            icon: AiFillDollarCircle
        },
        {
            id: 3,
            title : "Projects",
            icon: FaBriefcase
        }
    ]

    const drawTabContent = (tabIndex) => {
        try{
            let entry = tabs[tabIndex]
            return (entry.component)
        }catch (e){
            return (<div>No projects Yet</div>)
        }

    }

    const handleTab = (tabIndex) => {
        try {
            setTabIndex(tabIndex);
        }catch (e){

        }

    };



    return (
        <Container sx={{ }} id="Gallery">
            <Box sx={styles.tabButtonTopWrapper}>
                <Box sx={styles.tabButtonWrapper}>
                    {categories.map((category, index) =>(
                        <Button
                            variant="tabsButton"
                            sx={{color: "red"}}
                            onClick={() => handleTab(category.id)}
                            className={`${tabIndex === category.id ? 'active' : ''}`}
                        >

                            {category.title}
                        </Button>
                    ))
                    }
                </Box>
            </Box>
            <Box sx={styles.tabContent}>
                {drawTabContent(tabIndex)}
            </Box>

        </Container>
    );
};

export default function CarriedDetails({carrier}) {


    const tabs = [
        {
            id: 0,
            component:   <Text sx={{color: "", textIndent: "2vw"}} variant={"muted"}>
                <PortableText blocks={carrier.content} serializers={serializer} />
            </Text>
        },
        {
            id: 1,
            component: Box,
        }
    ]
    const style = {
        container: {
            display: "flex", backgroundColor: "ds"
        }
    }
    let props = {
        date: "Juin 2012 - Mars 2014",
        role: "test role",
        tags: ["jkhfkjd"],
        company: "test",
        skills: ["React"],
    }
    useEffect(() => {

        logPageView();
        Router.events.on('routeChangeComplete', logPageView);
    }, []);

  return (

    <Home></Home>




  )
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const styles = {
    featured: {
        pt: ['80px', null, null, null, '80px', null, '100px'],
        backgroundColor: '#F9FAFC',
    },
    container: {
        position: 'relative',
        top: '150px',
        mt: '-150px',
    },
    tabButtonTopWrapper: {
        overflowY: ['hidden', null, null, null, null, 'inherit'],
        overflowX: ['auto', null, null, null, null, 'inherit'],
    },
    tabButtonWrapper: {
        width: ['700px', null, null, null, null, '100%'],
        mx: ['auto', null, null, null, null, '0'],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid rgba(1,7,13,.1)',
        mb: '35px',
        button: {
            display: 'flex',
            alignItems: 'center',
            pb: ['15px', null, null, null, '35px'],
            px: ['15px', null, null, null, '30px'],
            flexShrink: '0',
            border: 0,
            backgroundColor: 'rgba(0,0,0,0)',
            color: 'white',
            fontSize: ['14px', null, null, null, '18px'],
            fontWeight: 500,
            lineHeight: 1,
            position: 'relative',
            transition: 'all 500ms ease',
            svg: {
                fontSize: ['18px', null, null, null, '30px'],
                color: '#ADBDD0',
                opacity: 0.7,
                mr: '15px',
                transition: 'all 500ms ease',
            },
            '&:hover, &.active': {
                backgroundColor: 'rgba(0,0,0,0)',
                color: 'white',
                svg: {
                    color: '#0F2137',
                    opacity: 1,
                },
                '&::before': {
                    transform: 'scale(1,1)',
                },
            },
            '&::before': {
                content: "''",
                position: 'absolute',
                bottom: '-2px',
                backgroundColor: 'white',
                left: 0,
                width: '100%',
                height: '3px',
                transform: 'scale(0,1)',
                transition: 'transform 500ms ease',
            },
        },
    },
    tabContent: {

        minHeight: ['190px', null, '300px', '385px', null, '600px'],
        position: 'relative',
        '&::before': {
            content: "''",
            width: '302px',
            height: '347px',

            position: 'absolute',
            bottom: '-30px',
            right: '-40px',
            display: ['none', null, null, null, null, 'block'],
        },
        '.tabImage': {
            position: 'relative',
            animation: `${fadeIn} 0.8s linear`,
        },
    },
};

export async function getStaticProps({ params }) {
    try{
        const data = await getOneCarrier(params.id)
        if(data !== -1){
            return {
                props: {
                    carrier: data,
                },
            };
        }else {
            return {
                notFound: true,
            };
        }

    }catch (e){

    }
}

export async function getStaticPaths({}) {
    const posts = await getCarrier();

    const allPaths = posts.map((post) => {

        return (
            { params: { id : post._id}}
        )
    })
    return {
        paths: allPaths,
        fallback: true,
    };
}


