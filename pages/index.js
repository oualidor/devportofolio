
import React, {useEffect, useRef} from "react";
import Timeline from '../components/TimeLine/TimeLine';
import Carrier from "../sections/Home/Career/Carrier"
import Landing from "../sections/Home/Landing/Landing"
import Skills from "../sections/Home/Skills/Skills"
import Testimonial from "../sections/Home/Testimonial/Testimonial"
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
import ReactGA from 'react-ga';
import Router, {useRouter} from 'next/router';
import {MountBackDrop} from "../src/Apis/Redux/Actions/Types";
import SingleCarrierDetails from "../components/SingleCarrierDetails/SingleCarrierDetails";
import {useDispatch} from "react-redux";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {Box} from "theme-ui";
import ReactToPrint,  { PrintContextConsumer }from "react-to-print";
import {CV} from "../components/CV/CV";
import CarrierDetails from "../components/CarrierDetails/CarrierDetails";
import MobileSingleCarrierDetails from "../components/MobileSingleCarrierDetails/MobileSingleCarrierDetails";
import BasicDocument from "../components/Pdf/Pdf";

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

    useEffect(() => {
        if(router.query.carrier !== undefined){
            dispatch({type: MountBackDrop, Component: <CarrierDetails/> , props:{} ,test: "hi"})
        }
        if(router.query.carrierId !== undefined){
            dispatch({
                type: MountBackDrop,
                Component:
                    <>
                        <MobileSingleCarrierDetails id={router.query.carrierId}/>
                        <SingleCarrierDetails id={router.query.carrierId}></SingleCarrierDetails>
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
      <Box sx={{zIndex: 10}} id={"Home"}>
          {/*<CV></CV>*/}
          <Landing></Landing>
          <Timeline Title={"Educational Background"} Data={EducationalBackgroundData}/>
          <Skills></Skills>
          <Carrier></Carrier>
          <Testimonial></Testimonial>
          <br/>
      </Box>
  )
}
