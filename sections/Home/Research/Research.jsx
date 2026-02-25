'use client';

import React from 'react';
import { Box, Text, Link } from "theme-ui";
import Carousel from 'react-multi-carousel';
import SectionTitle from "../../../components/StyledComponents/SectionTitle";
import StyledText from '../../../components/StyledComponents/StyledText';
import { AiOutlineFilePdf } from "react-icons/ai";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1619 },
        items: 4,
        slidesToSlide: 1,
    },
    laptop: {
        breakpoint: { max: 1619, min: 1024 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const PaperCard = ({ year, title, authors, venue, link }) => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: 'column',
            p: 3,
            m: 2,
            backgroundColor: 'trasparent',
            borderRadius: '8px',
            boxShadow: '0px 0px 10px rgba(38, 78, 118, 0.1)',
            transition: 'all 0.3s',
            '&:hover': {
                boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.15)',
                transform: 'translateY(-5px)'
            },
            height: '100%',
            minHeight: '250px'
        }}>
            <StyledText variant="timeLineTitle" sx={{ fontSize: '14px', mb: 2 }}>
                {year}
            </StyledText>
            <Text sx={{ fontWeight: "bold", fontSize: '18px', mb: 2, color: '#FFF' }}>
                {title}
            </Text>
            <Text variant='muted' sx={{ fontSize: '14px', mb: 4, fontStyle: 'italic' }}>
                {authors}
            </Text>
            <Text variant='muted' sx={{ fontSize: '14px', mb: 3, fontWeight: 'medium' }}>
                {venue}
            </Text>
            {link && (
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        mt: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: 'secondary',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        '&:hover': {
                            color: 'secondary',
                        }
                    }}
                >
                    <AiOutlineFilePdf style={{ marginRight: '8px' }} size={20} />
                    Read Paper
                </Link>
            )}
        </Box>
    );
};

const Research = ({ title, data }) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", my: 5 }} id={"Research"} variant={'section.PageSection'} as={"section"}>
            <SectionTitle variant="sectionTitle">{title}</SectionTitle>
            <Carousel
                responsive={responsive}
                infinite={false}
                draggable
                keyBoardControl
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {data && data.map((paper, i) => (
                    <PaperCard
                        key={i}
                        year={paper.year}
                        title={paper.title}
                        authors={paper.authors}
                        venue={paper.venue}
                        link={paper.link}
                    />
                ))}
            </Carousel>
        </Box>
    );
};

export default Research;
