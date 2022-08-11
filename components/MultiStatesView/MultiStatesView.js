import {Alert, Box, Button, Spinner, Text} from "theme-ui";
import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";


const MultiStatesView = forwardRef(({state, props,  dataLoader, children, }, ref)=>{

    useImperativeHandle(ref, () => ({

    }));
    useEffect(()=>{

    }, [])

    return(
        <Box ref={ref} {...props}>
            {
                state == -1 &&
                <Alert sx={{display: "flex", justifyContent: "space-between", my: 5}} variant={'error'}>
                    Data could not be loaded correctly
                    <Button
                        onClick={dataLoader}
                        variant={'whiteButton'}>
                        Retry
                    </Button>
                </Alert>
            }
            {
                state == 0 &&
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", my: 5}}>
                    <Spinner size={40} color={'white'}></Spinner>
                </Box>

            }

            {
                state == 1 &&
                children
            }
        </Box>
    )
})


export default MultiStatesView
