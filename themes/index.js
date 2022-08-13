import PatternBG from "../src/assets/Images/row-svg-triangles.svg";
export default function createTheme(language) {

    return{
        // example colors with dark mode
        colors: {
            text: '#343D48', // body color and primary color
            text_secondary: '#02073E', // secondary body color
            heading: '#244886', // primary heading color
            heading_secondary: '#0F2137', // heading color
            background: '#FFFFFF', // body background color
            background_secondary: '#F9FBFD', // secondary background color
            border_color: '#E5ECF4', // border color
            primary: language == "en" ? '#0F1624': "#1F3E76", // primary button and link color
            secondary: '#25CB9E', // secondary color - can be used for hover states
            muted: '#7B8188', // muted color
            accent: '#609', // a contrast color for emphasizing UI
            yellow: '#F6C416',

            // highlight	a background color for highlighting text
            modes: {
                dark: {
                    text: '#fff',
                    background: '#000',
                    primary: '#0cf',
                    secondary: '#09c',
                    muted: '#111',
                },
            },
        },
        breakpoints: [
            '480px',
            '640px',
            '768px',
            '1024px',
            '1220px',
            '1366px',
            '1620px',
        ],
        fonts: {
            body: language == "en" ? "Space Grotesk, sans-serif": "'Amiri', serif;",
            heading: language == "en" ? "Space Grotesk, sans-serif;": "'Amiri', serif;",
        },
        fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
        fontWeights: {
            body: 'normal',
            heading: 500,
            bold: 700,
        },
        lineHeights: {
            body: 1.8,
            heading: 1.5,
        },
        letterSpacings: {
            body: 'normal',
            caps: '0.2em',
            heading: '-0.5px',
        },
        space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
        layout: {
            container: {
                maxWidth: [
                    '100%',
                    null,
                    null,
                    '780px',
                    '1020px',
                    '1200px',
                    null,
                    '80%',
                ],
                px: [4, 6],
            },
            header: {
                color: '#02073E',
                fontWeight: 'normal',
                py: 3,
                position: 'absolute',
                width: '100%',
            },
            toolbar: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            },
            main: {},
            box: {
                backgroundColor: "red"
            }
        },
        section: {
            default: {
                pt: [8, null, 9, null, null, 120],
                pb: [8, null, 9, null, null, 180],
            },
            PageSection:{
                pt: ['80px', '80px', '80px', '80px', '80px', '80px', '80px'],
                backgroundColor: '',
            },
            white: {
                variant: "section.default",
                backgroundColor: "white",
                borderRadius: 10,

            },
            noWhite:{
                variant: "section.default",
                backgroundColor: 'primary',
                backgroundImage: `url(${PatternBG})`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                zIndex: 1,

            },
            block: {
                variant: 'section.white',
                p: [2, null, 9, null, null, 2],
                pb: [2, null, 9, null, null, 2],
            },
            workflow: {
                variant: 'section.noWhite',
                position: 'relative',
                '&::before': {
                    position: 'absolute',
                    content: '""',
                    top: 0,
                    right: 0,
                    background:
                        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
                    width: '100%',
                    backgroundSize: '350px 350px',
                    height: '100%',
                    opacity: 0.3,
                    zIndex: 0
                },
            },
            keyFeature: {
                py: [8, null, 9, null, null, 10],
            },
            feature: {
                backgroundColor: "red",
                py: [8, null, 9, null, null, 10],
            },
            partner: {
                pt: [10, null, null, 10],
                pb: [8, null, 9, null, null, 10],
            },
            scheduleMeting: {
                pt: [10, null, null, 7],
                pb: [8, null, 9, null, null, 10],
            },
            testimonial: {
                variant: "section.white",
                pt: [8, null, 9, null, null, 100],
                pb: [8, null, 9, null, null, 100],
            },
            securePayment: {
                overflow: 'hidden',
                position: 'relative',
                pt: 9,
            },
            faq: {
                variant: 'section.noWhite',
                py: [8, null, 9, null, null, 8],
            },
            portfolioGallery: {

                pt: [10, null, null, 7],
                pb: [8, null, 9, null, null, 5],
            },

        },
        sectionHeader: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: -1,
            marginBottom: ['50px', null, '60px', null, '65px', '75px'],
            title: {
                fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
                color: 'heading_secondary',
                lineHeight: [1.3, null, null, 1.2],
                textAlign: 'center',
                fontWeight: '700',
                letterSpacing: '-.5px',
            },

            subTitle: {
                fontSize: [0, null, '14px'],
                color: 'heading',
                textAlign: 'center',
                letterSpacing: ['1.5px', null, '2px'],
                textTransform: 'uppercase',
                fontWeight: '700',
                mb: '8px',
                lineHeight: 1.5,
            },
        },
        text: {
            sectionTitle: {
                fontWeight: ["400", "400", "400", "800", "600", "800", "800"],
                fontSize: ["25px", "30px", "30px", "35px", "35px", "39px"],
                lineHeight: '72px',
                width: "max-content",
                maxWidth: "100%",
                marginBottom: "16px",
                padding: "0px",
                fontFamily: 'heading',
            },
            timeLineTitle: {
                fontWeight: "0",
                fontSize: [
                    '22px',
                    '24px',
                    '24px',
                    '20px',
                    '20px',
                    '1.4vw',
                    '1.5vw',
                ],
                lineHeight: '72px',
                width: "max-content",
                maxWidth: "100%",
                marginBottom: "1px",
                padding: "0px",
                fontFamily: 'heading',
            },
            heading: {
                fontFamily: 'heading',
                lineHeight: 'heading',
                fontWeight: 'heading',
                fontSize: 5,
                letterSpacing: 'heading',
                color: 'heading',
            },
            heroPrimary: {
                color: 'white',
                fontSize: [
                    '36px',
                    '36px',
                    '40px',
                    '40px',
                    '44px',
                    '48px',
                    '54px',
                    '3v',
                ],
                lineHeight: 1.2,
                fontWeight: 700,
                mb: [5, null, null, null, '30px'],
            },
            fullAndHalf: {
                color: 'white',
                fontSize: [
                    '6vw',
                    '5vw',
                    '4.5vw',
                    '4vw',
                    '2.5vw',
                    '2.5vw',
                    '2.5vw',
                    '2.5vw',
                ],
                textAlign: [
                    'center',
                    'center',
                    'center',
                    'left',
                    'left',
                    'left',
                    'left',

                ],
                lineHeight: 1.2,
                fontWeight: 700,
                mb: [5, null, null, null, '30px'],
            },
            heroSecondary: {
                color: 'white',
                fontSize: [2, 3, 4, '17px', null, 3, '19px', 4],
                lineHeight: [2, null, null, null, 2.2],
                fontWeight: 'body',
                pr: [0, null, null, null, null, '100px', null, '125px'],
                mb: ['35px', null, null, null, '40px', null, null, 7],
            },
            title: {
                // extends the text.heading styles
                variant: 'text.heading',
                fontWeight: 'bold',
                fontSize: 18,
                lineHeight: '30px',
                color: '#0F2137',
            },
            lead: {
                fontSize: 40,
                fontFamily: 'DM Sans',
                fontWeight: '500',
                lineHeight: '60px',
                letterSpacing: '-1.5px',
                color: '#0F2137',
            },
            muted: {
                lineHeight: '26px',
                color: 'muted',
            },
            secondary: {
                fontWeight: 500,
                color: '#00A99D',
                lineHeight: '40px',
            },
        },
        links: {
            default: {
                cursor: 'pointer',
            },
            bold: {
                fontWeight: 'bold',
            },
            nav: {
                display: ['none', null, 'inline-block'],
                px: 25,
                fontWeight: 'normal',
            },
            footer: {
                display: 'block',
                px: 0,
                color: 'inherit',
                textDecoration: 'none',
            },
            logo: {
                display: 'flex',
            },
        },
        images: {
            avatar: {
                width: 48,
                height: 48,
                borderRadius: 99999,
            },
        },
        buttons: {
            menu: {
                display: [null, null, 'none'],
            }, // default variant for MenuButton
            // you can reference other values defined in the theme
            defaultBtn: {
                borderRadius: '45px',
                fontSize: ['14px', 1, null, null, 2],
                letterSpacings: ['-0.5px', null, null, null, '-0.15px'],
                padding: ['11px 20px 10px', null, null, null, '13px 30px'],
                fontFamily: 'body',
                cursor: 'pointer',
                lineHeight: 1.2,
                transition: 'all 0.25s',
                fontWeight: 500,
                '&:focus': {
                    outline: 0,
                },
            },
            primary: {
                variant: 'buttons.defaultBtn',
                color: 'white',
                bg: 'primary',
                '&:hover': {
                    boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',
                },
            },
            whiteButton: {
                border: '1.5px solid white',
                variant: 'buttons.defaultBtn',
                color: 'heading_secondary',
                cursor: 'pointer',
                bg: 'white',
                '&:hover': {
                    boxShadow: 'rgba(0, 0, 0, 1) 0px 12px 24px -10px',
                },
            },
            secondary: {
                variant: 'buttons.defaultBtn',
                border: '1.5px solid white',
                backgroundColor: 'transparent',
                color: 'white',
                '&:hover': {
                    bg: 'white',
                    color: 'heading_secondary',
                    boxShadow: 'rgba(0, 0, 0, 1) 0px 12px 24px -10px',
                },
            },
            textButton: {
                padding: 0,

                variant: 'buttons.defaultBtn',
                backgroundColor: 'transparent',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                svg: {
                    fontSize: [4, 6],
                    mr: 2,
                },
            },
            tabsButton: {
                fontWeight: 'bold',
                fontFamily: language == "en" ? "Space Grotesk, sans-serif": "'Amiri', serif;",
                color: 'white',
                bg: 'primary',
                cursor: 'pointer',
                transition: '500ms',
                fontSize: 2,
                outline: 'none',
                '&:hover': {
                    bg: 'secondary',
                },
            },
            actionButton: {

                width: "180px",
                fontWeight: 'bold',
                color: 'white',
                bg: 'primary',
                cursor: 'pointer',
                transition: '500ms',
                fontSize: 2,
                outline: 'none',
                '&:hover': {
                    bg: 'secondary',
                },
            },
        },
        cards: {
            primary: {
                padding: 2,
                borderRadius: 4,
            },
            offer: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
                minHeight: 130,
                m: 2,
                background: '#FFFFFF',
                border: '1px solid #EDEFF6',
                borderRadius: 5,
            },
            featureCard: {
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'row',
                p: 3,
            },
        },
        forms: {
            label: {
                fontSize: 1,
                fontWeight: 'bold',
            },
            input: {
                borderRadius: 8,
                borderColor: 'border_color',
                height: 60,
                '&:focus': {
                    borderColor: 'primary',
                    boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
                    outline: 'none',
                },
            },
        },
        badges: {
            primary: {
                color: 'background',
                bg: '#28A5FF',
                borderRadius: 30,
                p: '3px 11px',
                fontSize: 1,
                letterSpacing: '-0.5px',
            },
            outline: {
                color: 'primary',
                bg: 'transparent',
                boxShadow: 'inset 0 0 0 1px',
            },
        },
        styles: {
            // To add base, top-level styles to the <body> element, use theme.styles.root.


            root: {
                fontFamily: 'body',
                lineHeight: 'body',
                fontWeight: 'body',
                fontSmoothing: 'antialiased',
                '.modal-video-close-btn': {
                    cursor: 'pointer',
                    top: '-25px',
                    right: '-25px',
                    width: ' 25px',
                    height: '25px',
                },
                '.modal-video-movie-wrap': {
                    margin: 6,
                    width: 'auto',
                },
                h1: {
                    fontSize: [18, 18, 20, 24, 28, 32],
                    fontFamily: 'heading',
                    fontWeight: 'heading',
                    color: 'primary',
                    mt: 4,
                    mb: 2,
                },
            },
            // Divider styles
            hr: {
                border: 0,
                borderBottom: '1px solid',
                borderColor: '#D9E0E7',
            },
            // also you can use other HTML elements style here
            ul: {
                listStyle: 'none',
            },
            srOnly: {
                border: '0 !important',
                clip: 'rect(1px, 1px, 1px, 1px) !important',
                clipPath: 'inset(50%) !important',
                height: '1px !important',
                margin: '-1px !important',
                overflow: 'hidden !important',
                padding: '0 !important',
                position: 'absolute !important',
                width: '1px !important',
                whiteSpace: 'nowrap !important',
            },
        },
        alerts: {
            primary : {
                backgroundColor: "green"
            },
            error : {
                backgroundColor: "#fa493c"
            }
        },
    }
};
