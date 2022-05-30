import { _SanityClient } from './_SanityClient';



export const getCarrer = async () => {
  const query = '*[_type == "career"][0..4]{..., }';
  let careerData  = await _SanityClient.fetch(query)
  return careerData
};

