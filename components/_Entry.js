import {Fragment, useEffect} from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../themes';
import {Provider as ReduxProvider} from "react-redux";
import reduxStore from "../src/Apis/Redux/reduxStore";
import Layout from './layout';

function _Entry({ Component, pageProps }) {


    useEffect(()=>{
        console.log(Component)
    }, [])

    return (<Fragment>
        <ReduxProvider store={reduxStore}>
            <ThemeProvider theme={theme("en")}>
                <Layout>

                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </ReduxProvider>
    </Fragment>);
}
export default _Entry
