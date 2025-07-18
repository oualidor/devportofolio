import '../styles/globals.css'
import '../styles/timeLine.css'
import {Fragment, useEffect} from 'react';
import _Entry from "../components/_Entry";
import { Analytics } from "@vercel/analytics/next"
import {Provider as ReduxProvider} from "react-redux";
import reduxStore from "../src/Apis/Redux/reduxStore";
import {Box, ThemeProvider} from "theme-ui";
import theme from "../themes";
import Layout from "../components/layout";

function CustomApp({ Component, pageProps }) {

    const sx = {
        Container: {
            '.mobileOnly' : {
                display: [null, null, null, null, 'none', "none", "none"]
            }
        }

    }



  return (<Fragment>
      <Box sx={sx.Container}>
          <ReduxProvider store={reduxStore}>
              <ThemeProvider theme={theme("en")}>
                  <Layout>

                      <Component {...pageProps} />
                  </Layout>
              </ThemeProvider>
          </ReduxProvider>
      </Box>
      <Analytics />

  </Fragment>);
}
export default CustomApp
