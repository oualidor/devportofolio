'use client';

import React from 'react';
import { Box, Button, Link, Text } from "theme-ui";
import SectionTitle from "../../../components/StyledComponents/SectionTitle";
import StyledText from '../../../components/StyledComponents/StyledText';
import { AiOutlineMail, AiOutlinePhone, AiOutlineCalendar } from "react-icons/ai";

const Contact = () => {
    // Note: Be sure to update these placeholder values with your actual contact information!
    const email = "oualid.khial@gmail.com";
    const phone = "00213550750576";
    const calendlyLink = "https://calendly.com/oualidkhial/";

    const sx = {
        container: {
            display: "flex",
            flexDirection: "column",
            my: 5,
            alignItems: "center"
        },
        infoBox: {
            backgroundColor: 'transparent',
            display: "flex",
            flexDirection: ["column", "column", "row"],
            gap: 4,
            mt: 4,
            mb: 5,
            width: "100%",
            justifyContent: "center"
        },
        contactItem: {
            backgroundColor: 'transparent',
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 3,

            borderRadius: "8px",
            boxShadow: '0px 0px 10px rgba(38, 78, 118, 0.1)',
        }
    };

    return (
        <Box sx={sx.container} id="Contact" variant={'section.PageSection'} as="section">
            <SectionTitle variant="sectionTitle">Contact Me</SectionTitle>

            <Box sx={sx.infoBox}>
                <Box sx={sx.contactItem}>
                    <AiOutlineMail size={24} color=" #FFF" />
                    <Link href={`mailto:${email}`} sx={{ textDecoration: 'none', color: 'text', fontWeight: 'bold', color: '#FFF' }}>
                        {email}
                    </Link>
                </Box>

                <Box sx={sx.contactItem}>
                    <AiOutlinePhone size={24} color=" #FFF" />
                    <Link href={`tel:${phone}`} sx={{ textDecoration: 'none', color: 'text', fontWeight: 'bold', color: '#FFF' }}>
                        {phone}
                    </Link>
                </Box>
            </Box>

            <Link href={calendlyLink} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
                <Button variant="secondary" sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 4, py: 3, backgroundColor: 'transparent' }}>
                    <AiOutlineCalendar size={20} />
                    Schedule a Meeting
                </Button>
            </Link>
            <br />
        </Box>
    );
};

export default Contact;
