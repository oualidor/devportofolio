
import React, { useState, useEffect } from 'react';

import {Box, Button, Container, Text} from "theme-ui";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {getCarrier} from "../../services";
import QRCode from "react-qr-code";
import PortableText from "@sanity/block-content-to-react";
import {Serializer} from "../../services/_SanityClient";
import SkillTag from "../SkillTag/SkillTag";


const CarrierCard = ({id, date, end, role, tags, company, skills, desc}) =>{
    let dispatch = useDispatch()
    let router = useRouter()
    return (
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "", width: "48%"   }}>
            <Box
                sx={{display: "flex", flexDirection: 'column',  marginBottom: "10px"}}
            >
                <Text sx={{ml: "5px"}}>{date}</Text>
                <Text  sx={{ml: "20px", fontSize: "16px", fontWeight: "bold"}}>{role}</Text>

                <Text  sx={{marginLeft: "20px", fontSize: "13px"}}>{"@ " + company}</Text>
            </Box>
            <Box>
            </Box>
        </Box>
    )
}


function CvCarrier(){
    const primaryLimit = 2
    let [data, setData ] = useState([])
    let [limit, setLimit ] = useState(primaryLimit)
    useEffect( ()=>{
        getCarrier().then(careerData =>{
            setData(careerData)

        }).catch(e =>{
            console.log(e)
        })

    }, [])


    return(

            <Box sx={{
                display: "flex",
                backgroundColor: "",
                width: "100%",
                height: "10cm",
                flexDirection: "column",
                 flexWrap: "wrap",
                '&::-webkit-scrollbar': { width: 0, }
            }}>
                {
                        data.map((entry, index) => (<CarrierCard
                                key={entry._id}
                                id={entry._id}
                                skills={entry.skills}
                                date={entry.date}
                                role={entry.title}
                                company={entry.company.name}
                                tags={entry.tags}
                                desc={entry.content}
                            ></CarrierCard>)


                        )
                }
            </Box>

    )

}


export default CvCarrier




