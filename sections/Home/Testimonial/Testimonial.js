
import { Container, Heading, Text, Box, Image, Button } from 'theme-ui';
import { GoLinkExternal } from "react-icons/go";
import ButtonGroup from "../../../components/button-group";
import Carousel from 'react-multi-carousel';
import StyledText from '../../../components/StyledComponents/StyledText';
import Avatar1 from './assets/avatar1.png';
import Avatar2 from './assets/avatar2.png';
import Avatar3 from './assets/avatar3.png';
import Avatar4 from './assets/avatar4.png';

const data = [
  {
    id: 1,
    title: 'Modern look & trending design',
    description:
      'Working with Mr Oualid KHIAL was defintly some thing I reallt enjoyed and appreciated, he was one of my best student and one of my best friends',
    avatar: Avatar1,
    name: 'Dr Moustfai AEK',
    designation: '@denny.hil',
    review: 4,
  },
  {
    id: 2,
    title: 'Design Quality & performance',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar2,
    name: 'Dr Youcef Saidi',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 3,
    title: 'Layout and organized layers',
    description:
      'Having Oulid KHIAL as A CBC ALTEC IT consultant was a good add to our company and his aconsulting eally move our busniss forword ',
    avatar: Avatar3,
    name: 'Zine el abadine CHAKROUN',
    designation: '@denny.hi',
    review: 5,
  },
  {
    id: 4,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: Avatar4,
    name: 'Ihab CHERITI',
    designation: '@denny.hil',
    review: 4,
  },
  {
    id: 4,
    title: 'Modern look & trending design',
    description:
      'Oualid is one of my best students that i am curremtly looking to colaborate with in PhD reserches',
    avatar: Avatar4,
    name: 'Dr Mokadem',
    designation: '@denny.hil',
    review: 4,
  },
];

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

export default function Testimonial() {
  return (
    <Box id="testimonial" sx={{  }}>
      <StyledText variant="sectionTitle">Testimonials I am proud of</StyledText>
      <Box sx={styles.carouselWrapper}>
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
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
    
              {/* <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading> */}
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client Image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
      <Box sx={{display: "flex", backgroundColor: "", alignItems: "center", justifyContent: "right"}}>
                <Button sx={{display: "flex", backgroundColor: "", alignItems: "center", justifyContent: "right"}} variant="textButton" onClick={()=> {setLimit(10)}}> 
                    <Text sx={{mr: 1, color: "white"}}>Add Testimonial</Text><GoLinkExternal style={{color: "white"}}></GoLinkExternal>
                </Button>
            </Box>
    </Box>
  );
}

const styles = {
  carouselWrapper: {
  
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
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
