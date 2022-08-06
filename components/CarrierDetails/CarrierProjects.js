import {Box} from "theme-ui";
import Carousel from "react-multi-carousel";
import Project from "./Project";


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1619 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    laptop: {
        breakpoint: { max: 1619, min: 1024 },
        items: 1,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 639, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const CarrierProjects = ({projects})=>{

    try {
        if(projects.length === 0 ){
            return (<Box></Box>)
        }else {
            return(
                <Carousel
                    arrows={false}
                    autoPlay={false}
                    autoPlaySpeed={100000}
                    centerMode={false}
                    draggable={true}
                    focusOnSelect={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={true}
                    responsive={responsive}
                    slidesToSlide={1}
                    showDots={true}
                    renderDotsOutside={true}
                >
                    {

                        projects.map((project, i) => (
                            <Project {...project} key={"project"+i}/>
                        ))
                    }

                </Carousel>
            )

        }

    }catch (e){
        return (<Box></Box>)
    }

}

export default CarrierProjects
