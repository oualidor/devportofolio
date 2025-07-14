import {Box} from "theme-ui";

export const MobileOnly = ({display, children}) => {

    return <Box sx={{display: [display, display, display, display, 'none', "none", "none"]}}>
        {children}
    </Box>
}
