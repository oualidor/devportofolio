
import { borderRadius } from 'polished';
import  { useState, useEffect } from 'react';

import {Box, Container, Text} from "theme-ui";
import {Avatar, ThemeProvider, createTheme} from '@mui/material';
import Chip from '@mui/material/Chip';
import r from "../../src/Imgs/React-icon.png"
const ProfessionalData = [
    { year: "2012 - 2015", degree: "Front end devolper", spec:  "Front end devolper", school:  "    "},
    { year: "2015 - 2017", degree: 'Front end devolper, ', spec:  "Modjib Digital", school:  ""},
    { year: "2018 - 2019", degree: 'Full Stack Developper, ', spec:  "El Manaheel School"},
    { year: "2019 - 2022", degree: 'Tech Lead, ', spec:  "YourIT Deparmtent", school: ""},
];

const theme = createTheme({

});
function SkillTag({name, level, style}){
    useState(()=>{

    }, [])


    return(
        <Box sx={{marginRight: "10px", mb: 1}}>
            <ThemeProvider theme={theme}>
            <Chip label={name} variant="outlined" color="primary" style={style} />
            </ThemeProvider>
    
            {/* <Text sx={{backgroundColor: "green", borderRadius: "20px", height: "40px", py: "1px", px: 4, display: "flex", alignItems: "center", color: "white"}}>{name}</Text> */}
        </Box>
      
    )
  
} 
 export default SkillTag
  
