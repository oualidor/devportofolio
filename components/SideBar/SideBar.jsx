import { keyframes } from '@emotion/core';
import {Box} from "theme-ui";
const positionAnim = keyframes`
  from {
    display: none;
     opacity: 1;
  }
  to {
    display: block;
     opacity: 1;
    transition: all 0.4s ease;
  }
`;

const SideBar = ({isOpen, children}) => {
    const st = {
        Container: {

            color: 'primary',
            position: 'absolute', top: 0, left: 0,
            width: '60vw', height: '100vh', pl: '30px', pt: '20px',
            backgroundColor: 'white',
            animation: `${positionAnim} 2s ease`,
            transition: 'all 0.5s ease',
            maxWidth: '250px',
            overflow: 'hidden',
            boxShadow: '0px 0px 15px lightgrey',
            '&.isOpen': {
                width: '0vw', pl: '0px', pt: '0px',
            }
        },
    }

    return <Box sx={st.Container} className={isOpen? 'isOpen': 'closed'} >
        {children}
    </Box>
}

export default SideBar
