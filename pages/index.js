
import React, {useEffect, useRef} from "react";
import Timeline from '../components/TimeLine/TimeLine';
import Carrier from "../sections/Home/Career/Carrier"
import Landing from "../sections/Home/Landing/Landing"
import AboutMe from "../sections/Home/Skills/AboutMe"
import Testimonial from "../sections/Home/Testimonial/Testimonial"
import 'react-multi-carousel/lib/styles.css';
import ReactGA from 'react-ga';
import Router, {useRouter} from 'next/router';
import {MountBackDrop} from "../src/Apis/Redux/Actions/Types";
import {useDispatch} from "react-redux";

import {Box} from "theme-ui";

import CarrierDetails from "../components/CarrierDetails/CarrierDetails";
import {useBreakpointIndex} from "@theme-ui/match-media";
import {CV} from "../components/CV/CV";
import MeetScheduler from "../components/MeetScheduler";

export const initGA = () => {
    ReactGA.initialize('G-8L31KNNS3F');
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

const EducationalBackgroundData = [
    { year: "2009 - 2012", degree: 'High School degree, ', spec:  "Experimengal Scince", school:  "Youcfi Bouchrit High School"},
    { year: "2012 - 2015", degree: 'Bachaloreas degree, ', spec:  "Computer Scince", school:  "Mouley TAHAR University"},
    { year: "2015 - 2017", degree: 'Master Degree, ', spec:  "Artificial intelligence",school: "Mouley TAHAR University"},
    { year: "2019 - Now", degree: 'Phd Degree, ', spec:  "Modeling and optimization of computer systems", school: "Mustapha STAMBOULI Univeristy"},
  ];



export default function Home(props) {
    let router = useRouter()
    let dispatch =  useDispatch()
    const sx = {
        Home: {
            '.mobileOnly' : {
                display: [null, null, null, null, 'none', "none", "none"]
            },

            '.Section':{
                pt: '80px',
            }
        }
    }
    const index = useBreakpointIndex()
    useEffect(() => {
        if(router.query.carrierId !== undefined){
            dispatch({
                type: MountBackDrop,
                Component:
                    <>
                        <CarrierDetails id={router.query.carrierId}/>

                    </>
                ,props:{}
                ,test: "hi"
            })
        }

        if(router.query.meetId !== undefined){
            dispatch({
                type: MountBackDrop,
                Component:
                    <>
                        <MeetScheduler meetId={router.query.meetId}/>

                    </>
                ,props:{}
                ,test: "hi"
            })
        }



            // dispatch({type: MountBackDrop, Component: <CV /> , props:{} ,test: "hi"})
        initGA();
        Router.events.on('routeChangeComplete', logPageView);
    }, [router.query]);

  return (
      <Box sx={sx.Home} id={"Home"}>
          {/*<CV></CV>*/}
          <Landing></Landing>
          <AboutMe></AboutMe>
          <Timeline Title={"Educational Background"} Data={EducationalBackgroundData}/>
          <Carrier></Carrier>
          <Testimonial></Testimonial>
          <br/>
      </Box>
  )
}
