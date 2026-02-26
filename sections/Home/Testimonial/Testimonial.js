import { Container, Heading, Text, Box, Image, Button } from 'theme-ui';
import ButtonGroup from "../../../components/button-group";
import Carousel from 'react-multi-carousel';
import StyledText from '../../../components/StyledComponents/StyledText';
import { AiFillLinkedin, AiFillMail, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getCarrier, getTestimonials } from "../../../services";
import MultiStatesView from "../../../components/MultiStatesView/MultiStatesView";
import SectionTitle from "../../../components/StyledComponents/SectionTitle";
import { motion } from "framer-motion";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Testimonial({ testimonialsData = [] }) {

  const [testimonials, setTestimonials] = useState([])
  let [state, setState] = useState(0)
  const loadData = () => {
    setState(0)
    if (testimonialsData && testimonialsData.length > 0) {
      setTestimonials(testimonialsData)
      setState(1)
    } else {
      setState(-1)
    }
  }
  useEffect(() => {

    loadData()
  }, [testimonialsData])


  const ContactInfo = ({ contactInfo }) => {

    try {
      return (
        <Box sx={
          {
            display: "flex", alignItems: "center", alignContent: "center"
          }
        }>
          {
            contactInfo.map((link, i) => {
              switch (link.type.type) {
                case "linkedIn":
                  return <Text key={i} sx={styles.designation}><a href={link.link} target={"_blank"}><AiFillLinkedin></AiFillLinkedin></a> </Text>
                  break;
                case "mail":
                  return <Text key={i} sx={styles.designation}><a href={"mailto://" + link.link} target={"_blank"}><AiOutlineMail></AiOutlineMail></a> </Text>
                  break;
                case "phone":
                  return <Text key={i} sx={styles.designation}><a href={"tel://" + link.link} target={"_blank"}><AiFillPhone /></a></Text>
                  break;
              }
            })
          }
        </Box>
      )
    } catch (e) {
      return (
        <Box sx={
          {
            display: "flex", alignItems: "center", alignContent: "center"
          }
        }>
        </Box>
      )

    }
  }
  return (


    <Box sx={{}} id="Testimonial">
      <SectionTitle variant="sectionTitle">Testimonials I am proud of</SectionTitle>
      <MultiStatesView state={state} dataLoader={loadData}>
        <Box sx={styles.carouselWrapper}>
          <motion.div
            style={{ position: "absolute", top: '45%' }}
            initial={{ left: '20%', opacity: 1 }}
            whileInView={{ left: '-20%', opacity: 0 }}
            transition={{ duration: 1.5, type: "tween" }}
          >
            <Box sx={{ color: 'white', display: ['block', 'block', 'block', 'none', 'none', 'none', 'none'] }}>
              <AiFillCaretLeft size={40} color={'white'}></AiFillCaretLeft>
            </Box>
          </motion.div>
          <motion.div
            style={{ position: "absolute", top: '45%' }}
            initial={{ left: '25%', opacity: 1 }}
            whileInView={{ left: '-15%', opacity: 0 }}
            transition={{ duration: 1.5, type: "tween" }}
          >
            <Box sx={{ color: 'white', display: ['block', 'block', 'block', 'none', 'none', 'none', 'none'] }}>
              <AiFillCaretLeft size={40} color={'white'}></AiFillCaretLeft>
            </Box>
          </motion.div>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {testimonials.map((item, i) => (
              <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
                <Text sx={styles.description} variant='muted' >{item.excerpt}</Text>
                <div className="card-footer">

                  <div className="reviewer-info">
                    <Heading as="h4" sx={styles.heading}>
                      {item.name}
                    </Heading>
                    <ContactInfo contactInfo={item.contactInfo}></ContactInfo>
                  </div>
                </div>
              </Box>
            ))}
          </Carousel>
          <motion.div
            style={{ position: "absolute", top: '45%' }}
            initial={{ right: '20%', opacity: 1 }}
            whileInView={{ right: '-20%', opacity: 0 }}
            transition={{ duration: 1.5, type: "tween" }}
          >
            <Box sx={{ color: 'white', display: ['block', 'block', 'block', 'none', 'none', 'none', 'none'] }}>
              <AiFillCaretRight size={40} color={'white'}></AiFillCaretRight>
            </Box>
          </motion.div>
          <motion.div
            style={{ position: "absolute", top: '45%' }}
            initial={{ right: '25%', opacity: 1 }}
            whileInView={{ right: '-15%', opacity: 0 }}
            transition={{ duration: 1.5, type: "tween" }}
          >
            <Box sx={{ color: 'white', display: ['block', 'block', 'block', 'none', 'none', 'none', 'none'] }}>
              <AiFillCaretRight size={40} color={'white'}></AiFillCaretRight>
            </Box>
          </motion.div>
        </Box>
      </MultiStatesView>
    </Box>


  );
}

const styles = {
  carouselWrapper: {
    position: 'relative', overflowX: "hidden", overflowY: "hidden"
  },
  reviewCard: {
    display: "flex", flexDirection: "column", justifyItems: "space-between",
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: '',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    lineHeight: [1.85, null, 2],
    minHeight: 180
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'muted',
    fontWeight: '500',
    fontSize: 6,
    lineHeight: 1.4,
    mr: 2
  },
};
