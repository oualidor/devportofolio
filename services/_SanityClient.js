import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const _SanityClient = sanityClient({
  projectId: 'yf8yejw7',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'sk5qfrk5nMnawzZqncjOHwVFkgjwfMbOfTSPIdfyZ3HUlx0OSpBHsSJQi4NJ9b2JPIFmMrbdpruoGKtD9Zucw7wuipFrGUz9BGRMCXic5yuKyxHM6852ICEDibMiMfWQHuSN2J49E1JQiXNNs2zM0hDhEL8zivDq4QDXYDTGabt2JjLxpSqi',
});

const builder = imageUrlBuilder(_SanityClient);

export const urlFor = (source) => builder.image(source);
