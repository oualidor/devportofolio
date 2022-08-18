import {Box} from "theme-ui";

export const LargeOnly = ({children}) => {

    return <Box sx={{display: ['none', 'none', 'none', 'none', 'block', "block", "block"]}}>
        {children}
    </Box>
}
