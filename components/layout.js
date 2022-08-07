
import {Alert, Close, Box, Container } from 'theme-ui';
import React, {useEffect, useState} from 'react';
import Sticky from 'react-stickynode';
import Header from './header/header';
import Footer from './footer/footer';

import {useDispatch, useSelector} from "react-redux";
import SEO from "../components/seo"
import {HideBackDrop, MountBackDrop, RemoveNotification} from "../src/Apis/Redux/Actions/Types";

import {rgba} from "polished";
import {useRouter} from "next/router";




const NotificationsContent = ({notificationsList})=>{
    const dispatch = useDispatch()
    return (

            notificationsList.map(notification =>{
                setTimeout(()=>{
                    dispatch({type: RemoveNotification, id: notification.id})
                }, notification.duration)
                return (
                    <Alert sx={{width: "100%", variant: "alerts."+notification.variant, mb: 2}}>
                        {notification.text}
                        <Close ml="auto" mr={-2} />
                    </Alert>
                )
            })
    )
}

const BackDropContent = ({Component, props})=>{
    try{
        return (React.cloneElement(Component, props))

    }catch (e){
        return (<div></div>)
    }

}

function Layout({ children }) {
    const [isSticky, setIsSticky] = useState(false);
    const notifications = useSelector((state) => state.NotificationsReducer)
    const BackDrop = useSelector((state) => state.BackDropReducer)
    const dispatch = useDispatch()

    // const selectedLang = lang => {
    //     return router.locale === lang ? <CheckSquareOutlined /> : <BorderOutlined />
    // }
    const router = useRouter();
    const style={
        Backdrop : {
            width: "99vw", height: "100vh", position: "absolute", zIndex: 999999,
            backgroundColor: rgba(0, 0, 0, 0.6),
            display: BackDrop.mount? "flex":"none",
            alignItems: "center",
            justifyContent: "center",
            p: 1
        },
        NotificationsContainer: {
            backgroundColor: "yellow",
            position: "absolute",
            right: "5%",
            width: ["85vw", "85vw", "60vw", "60vw", "40vw", "40vw"],
            marginTop: "10vh",
            float: "right",
            zIndex: 999999999999999999999
        }
    }



    useEffect(()=>{

    }, [router])
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <Box id={"Layout"}>
        <SEO author={"Oualid KHIAL"} title={"Oualid KHIAL, Full stack developer and tech teacher"}></SEO>
        <Sticky innerZ={1002} top={0} >
            <Box
                id={'BackDrop'}
                sx={style.Backdrop}
                onClick={(e)=>{
                    if(e.target.id == "BackDrop"){
                        dispatch({type: HideBackDrop, props:{} ,test: "hi"})
                        router.push("/", undefined, { shallow: true })
                    }
                    }
                }
            >
                <BackDropContent Component={ BackDrop.Component} props={ BackDrop.props}></BackDropContent>
            </Box>
        </Sticky>
        <Sticky innerZ={1002} top={1} >
            <Container id={"NotificationsContainer"} sx={style.NotificationsContainer}>
                <NotificationsContent notificationsList={notifications.list}></NotificationsContent>
            </Container>
        </Sticky>
        <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
            <Header className={`${isSticky ? 'sticky' : 'unSticky'}`}  />
        </Sticky>
        <Container
            id={"LayoutBody"}
            sx={{pt: '0px'}}
        >
            {children}
        </Container>
       <Footer></Footer>
    </Box>
  );
}


export default Layout
