import { _SanityClient } from './_SanityClient';



export const getCarrier = async () => {
  const query = `*[_type == "career"] | order(from desc)[0..10]{
    ...,
    company->{..., contactInfo[]{..., type->}},
    projects[]->{..., skills[]->}
  }`;

  let careerData = await _SanityClient.fetch(query);
  return careerData;
};

export const getOneCarrier = async (id) => {
  try{
    const query = '*[_type == "career" && _id == "'+id+'"][0..1]{...,  company->{..., contactInfo[]{..., type->}}, projects[]->{..., skills[]->, links[]{..., type->}}}';
    let careerData  = await _SanityClient.fetch(query)
    return careerData[0]
  }catch (e){
    return e

  }
};

export const getTestimonials = async () => {
  const query = '*[_type == "testimonial"][0..4]{ ..., contactInfo[]{..., type->}}';
  let careerData  = await _SanityClient.fetch(query)
  return careerData
};

export const getPerson = async () => {
  const query = '*[_type == "person" ][0..1]{..., contactInfo[]{..., type->} }';
  let careerData  = await _SanityClient.fetch(query)
  return careerData[0]
};

