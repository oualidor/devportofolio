import '../styles/globals.css'
import '../styles/timeLine.css'
import '../styles/github.css'
import {Fragment, useEffect} from 'react';
import _Entry from "../components/_Entry";


function CustomApp({ Component, pageProps }) {


  useEffect(()=>{

  })

  return (<Fragment>
      <_Entry Component={Component} pageProps={pageProps}></_Entry>
  </Fragment>);
}
export default CustomApp
