import '../styles/globals.css'
import '../styles/timeLine.css'
import {Fragment, useEffect} from 'react';
import _Entry from "../components/_Entry";
import { Analytics } from "@vercel/analytics/next"

function CustomApp({ Component, pageProps }) {


  useEffect(()=>{

  }, [])

  return (<Fragment>
      <_Entry Component={Component} pageProps={pageProps}></_Entry>
      <Analytics />

  </Fragment>);
}
export default CustomApp
