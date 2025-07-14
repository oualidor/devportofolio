import React, { useState, useRef, useEffect } from 'react';
import {Text, Box } from "theme-ui"


const Entry = ({start, end, degree, spec, school}) =>{

    return (
        <Box sx={
            {
                mb: "20px",
                display: "flex", flexDirection: 'column',
            }
        }
        >
            <Text sx={{ml: "5px"}}>{start}</Text>
            <Text  sx={{ml: "20px", fontSize: "16px", fontWeight: "bold"}}>{degree}</Text>
            <Text  sx={{ml: "20px", fontSize: "14px"}}>{spec}</Text>
            <Text  sx={{ml: "20px", fontSize: "14px"}}>{school}</Text>
        </Box>
    )
}
const EducationalBackgroundData = [
    { year: "Sep 2012 - Jun 2015", degree: 'Bachaloreas degree, ', spec:  "Computer Scince", school:  "Mouley TAHAR University, Saida"},
    { year: "2015 - 2017", degree: 'Master Degree, ', spec:  "Artificial Intelligence",school: "Mouley TAHAR University, Saida"},
    { year: "2019 - Now", degree: 'Phd Degree, ', spec:  "Modeling and optimization of computer systems", school: "Mustapha STAMBOULI Univeristy, Mascara"},
];
const CvEducation = ({Title, Text}) => {

    useEffect(() => {

    }, []);

    return (
        <Box sx={{display: "flex", flexDirection: "column"}}>

                {
                    EducationalBackgroundData.map((entry, i) =>{
                        return (<Entry
                            key={i}
                            start={entry.year}
                            degree={entry.degree}
                            school={entry.school}
                            spec={entry.spec}
                        ></Entry>)
                    })
                }

        </Box>
    );
};

export default CvEducation;
