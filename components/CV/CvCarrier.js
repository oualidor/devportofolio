
import React, { useState, useEffect } from 'react';

import {Box, Button, Container, Text} from "theme-ui";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {getCarrier} from "../../services";
import QRCode from "react-qr-code";


const CarrierCard = ({id, date, end, role, tags, company, skills}) =>{
    let dispatch = useDispatch()
    let router = useRouter()
    return (
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"    }}>
            <Box
                sx={{display: "flex", flexDirection: 'column',  marginBottom: "0.5cm"}}
            >
                <Text  sx={{marginLeft: "0px", fontSize: "14px", color: "red"}}>{date}</Text>
                <Text  sx={{marginLeft: "20px", fontSize: "13px"}}>{role}</Text>
                <Text  sx={{marginLeft: "20px", fontSize: "13px"}}>{"@ " + company}</Text>
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

        <Box sx={{backgroundColor: "", }}>
            <Box sx={{
                width: "100%",
                justifyContent: 'space-around', alignItems: 'center', flexWrap: "wrap",
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
        </Box>
    )

}


export default CvCarrier




