'use client';

import { Provider as ReduxProvider } from "react-redux";
import reduxStore from "../Apis/Redux/reduxStore";
import { ThemeProvider } from "theme-ui";
import theme from "../../themes";

export default function Providers({ children }) {
    return (
        <ReduxProvider store={reduxStore}>
            <ThemeProvider theme={theme("en")}>
                {children}
            </ThemeProvider>
        </ReduxProvider>
    );
}
