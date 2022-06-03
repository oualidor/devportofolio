
import {useEffect} from "react";
import Timeline from '../components/TimeLine/TimeLine';
import Career from "../sections/Home/Career/Career"
import Landing from "../sections/Home/Landing/Landing"
import Skills from "../sections/Home/Skills/Skills"
import Testimonial from "../sections/Home/Testimonial/Testimonial"
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
import ReactGA from 'react-ga';
import Router, {useRouter} from 'next/router';

export const initGA = () => {
    console.log('GA init');
    ReactGA.initialize('G-8L31KNNS3F');
};

export const logPageView = () => {
    console.log(`Logging pageview for ${window.location.pathname}`);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

const EducationalBackgroundData = [
    { year: "2009 - 2012", degree: 'High School degree, ', spec:  "Experimengal Scince", school:  "Youcfi Bouchrit High School"},
    { year: "2012 - 2015", degree: 'Bachaloreas degree, ', spec:  "Computer Scince", school:  "Mouley TAHAR University"},
    { year: "2015 - 2017", degree: 'Master Degree, ', spec:  "MICR",school: "Mouley TAHAR University"},
    { year: "2019 - Now", degree: 'Phd Degree, ', spec:  "Modeling and optimization of computer systems", school: "Mustapha STAMBOULI Univeristy"},
  ];

  const ProfessionalData = [
    { year: "2012 - 2015", degree: "Front end devolper", spec:  "Front end devolper", school:  "    "},
    { year: "2015 - 2017", degree: 'Front end devolper, ', spec:  "Modjib Digital", school:  ""},
    { year: "2018 - 2019", degree: 'Full Stack Developper, ', spec:  "El Manaheel School"},
    { year: "2019 - 2022", degree: 'Tech Lead, ', spec:  "YourIT Deparmtent", school: ""},
  ];

export default function Home(props) {

    useEffect(() => {

        initGA();
        logPageView();
        Router.events.on('routeChangeComplete', logPageView);
    }, []);

  return (
      <>
     <Landing></Landing>
      <Timeline Title={"Educational Background"} Data={EducationalBackgroundData}/>
      <Skills></Skills>
      <Career></Career>
      {/* <ShowRoom></ShowRoom> */}


      <Testimonial></Testimonial>

      </>
  )
}
