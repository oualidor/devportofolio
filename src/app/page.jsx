'use client';

import React, { useEffect, Suspense } from "react";
import Timeline from '../../components/TimeLine/TimeLine';
import Carrier from "../../sections/Home/Career/Carrier"
import Landing from "../../sections/Home/Landing/Landing"
import Testimonial from "../../sections/Home/Testimonial/Testimonial"
import Research from "../../sections/Home/Research/Research"
import Contact from "../../sections/Home/Contact/Contact"
import 'react-multi-carousel/lib/styles.css';
import ReactGA from 'react-ga';
import { useSearchParams } from 'next/navigation';
import { MountBackDrop } from "../../src/Apis/Redux/Actions/Types";
import { useDispatch } from "react-redux";
import { Box } from "theme-ui";
import CarrierDetails from "../../components/CarrierDetails/CarrierDetails";
import MeetScheduler from "../../components/MeetScheduler";

const EducationalBackgroundData = [
    { year: "2009 - 2012", degree: 'High School degree, ', spec: "Experimengal Scince", school: "Youcfi Bouchrit High School" },
    { year: "2012 - 2015", degree: 'Bachaloreas degree, ', spec: "Computer Scince", school: "Mouley TAHAR University" },
    { year: "2015 - 2017", degree: 'Master Degree, ', spec: "Artificial intelligence", school: "Mouley TAHAR University" },
    { year: "2020 - 2025", degree: 'Phd Degree, ', spec: "Modeling and optimization of computer systems", school: "Mustapha STAMBOULI Univeristy" },
];

const ResearchPapersData = [
    {
        year: "2025",
        title: "IYad: A Dataset for Arabic Printed Text Recognition in Natural Scene Videos ",
        authors: "Oualid K., Fatmma B.",
        venue: "International Conference on Artificial Intelligence (ICAI)",
        link: "https://academicresearchlibrary.com/storage/pdf/i59aWPi80Jzu62yCbXQ1V9tFmdQ5MWzruiA8XeKo.pdf"
    },
    {
        year: "2026",
        title: "Multi Head Attention Transformer for Arabic Scene Images Text Recognition",
        authors: "Oualid O., Doe A.",
        venue: "Journal of Information Systems Engineering and Management",
        link: "https://example.com/paper2.pdf"
    },

];


export default function Home() {

    const searchParams = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const carrierId = searchParams.get('carrierId');
        const meetId = searchParams.get('meetId');

        if (carrierId) {
            dispatch({
                type: MountBackDrop,
                Component: <CarrierDetails id={carrierId} />,
                props: {},
                test: "hi"
            });
        }

        if (meetId) {
            dispatch({
                type: MountBackDrop,
                Component: <MeetScheduler meetId={meetId} />,
                props: {},
                test: "hi"
            });
        }

        ReactGA.initialize('G-8L31KNNS3F');
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }, [searchParams, dispatch]);

    const sx = {
        Home: {
            '.mobileOnly': {
                display: [null, null, null, null, 'none', "none", "none"]
            },
            '.Section': {
                pt: '80px',
            }
        }
    };
    return (
        <Box sx={sx.Home} id={"Home"}>
            <Landing />
            <Timeline Title={"Educational Background"} Data={EducationalBackgroundData} />
            <Carrier title={'Professional Carrier'} text={'Basically, I am good with all teh technologies labeled i used in the projects bellow, But, I do believe that I do have a good understanding of the philosophy behind giving orders\n' +
                'to the computer and problem solving, I can adapt'} />
            <Research title={"Research Papers"} data={ResearchPapersData} />
            <Testimonial />
            <Contact />
            <br />
        </Box>
    );
}
