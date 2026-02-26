import { getCarrier, getTestimonials } from "../../services";
import HomeClient from "./HomeClient";

export default async function Home() {
    let careerData = [];
    let testimonialsData = [];

    try {
        careerData = await getCarrier();
        testimonialsData = await getTestimonials();
    } catch (e) {
        console.error("Error fetching data on server", e);
    }

    return (
        <HomeClient careerData={careerData} testimonialsData={testimonialsData} />
    );
}