import {useState} from "react";
import {Box, Button} from "theme-ui";
import {keyframes} from "@emotion/react";

const TabsWidget = ({tabs, categories}) => {
    const [tabIndex, setTabIndex] = useState(0);

    const fadeIn = keyframes`
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        `;

    const styles = {
        featured: {
            pt: ['80px', null, null, null, '80px', null, '100px'],
            backgroundColor: '#F9FAFC',
        },
        container: {
            position: 'relative',
            top: '150px',
            mt: '-150px',
        },
        tabButtonTopWrapper: {
            overflowY: ['hidden', null, null, null, null, 'inherit'],
            overflowX: ['auto', null, null, null, null, 'inherit'],
        },
        tabButtonWrapper: {
            width: ['700px', null, null, null, null, '100%'],
            mx: ['auto', null, null, null, null, '0'],
            display: 'flex',
            borderBottomColor: "red",
            border: 5,
            alignItems: 'center',
            borderBottom: '1px solid rgba(1,7,13,.1)',
            mb: '35px',
            button: {
                display: 'flex',
                alignItems: 'center',
                pb: ['15px', null, null, null, '35px'],
                px: ['15px', null, null, null, '30px'],
                flexShrink: '0',
                border: 0,
                backgroundColor: 'rgba(0,0,0,0)',
                color: 'white',
                fontSize: ['14px', null, null, null, '18px'],
                fontWeight: 500,
                lineHeight: 1,
                position: 'relative',
                transition: 'all 500ms ease',
                svg: {
                    fontSize: ['18px', null, null, null, '30px'],
                    color: '#ADBDD0',
                    opacity: 0.7,
                    mr: '15px',
                    transition: 'all 500ms ease',
                },
                '&:hover, &.active': {
                    backgroundColor: 'rgba(0,0,0,0)',
                    color: 'white',
                    svg: {
                        color: '#0F2137',
                        opacity: 1,
                    },
                    '&::before': {
                        transform: 'scale(1,1)',
                    },
                },
                '&::before': {
                    content: "''",
                    position: 'absolute',
                    bottom: '-2px',
                    backgroundColor: 'white',
                    left: 0,
                    width: '100%',
                    height: '3px',
                    transform: 'scale(0,1)',
                    transition: 'transform 500ms ease',
                },
            },
        },
        tabContent: {

            minHeight: ['190px', null, '300px', '385px', null, '600px'],
            position: 'relative',
            '&::before': {
                content: "''",
                width: '302px',
                height: '347px',

                position: 'absolute',
                bottom: '-30px',
                right: '-40px',
                display: ['none', null, null, null, null, 'block'],
            },
            '.tabImage': {
                position: 'relative',
                animation: `${fadeIn} 0.8s linear`,
            },
        },
    };

    const drawTabContent = (tabIndex) => {
        try{
            let entry = tabs[tabIndex]
            return (entry.component)
        }catch (e){
            return (<div>No projects Yet</div>)
        }

    }

    const handleTab = (tabIndex) => {
        try {
            setTabIndex(tabIndex);
        }catch (e){

        }

    };



    return (
        <Box sx={{ }} id="Gallery">
            <Box sx={styles.tabButtonTopWrapper}>
                <Box sx={styles.tabButtonWrapper}>
                    {categories.map((category, index) =>(
                        <Button
                            variant="tabsButton"
                            sx={{color: "red"}}
                            onClick={() => handleTab(category.id)}
                            className={`${tabIndex === category.id ? 'active' : ''}`}
                        >

                            {category.title}
                        </Button>
                    ))
                    }
                </Box>
            </Box>
            <Box sx={styles.tabContent}>
                {drawTabContent(tabIndex)}
            </Box>

        </Box>
    );
};


export default  TabsWidget
