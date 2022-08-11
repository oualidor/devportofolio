import {Fragment, useEffect} from 'react';
import {Box, ThemeProvider} from 'theme-ui';
import theme from '../themes';
import {Provider as ReduxProvider} from "react-redux";
import reduxStore from "../src/Apis/Redux/reduxStore";
import Layout from './layout';

function _Entry({ Component, pageProps }) {
    const sx = {
        Container: {
            '.mobileOnly' : {
                display: [null, null, null, null, 'none', "none", "none"]
            }
        }

    }

    useEffect(()=>{
        console.log(Component)
    }, [])

    return (<Box sx={sx.Container}>
        <ReduxProvider store={reduxStore}>
            <ThemeProvider theme={theme("en")}>
                <Layout>

                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </ReduxProvider>
    </Box>);
}
export default _Entry
