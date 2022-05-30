const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const nextConfiguration = {
 react: { useSuspense: false },//this line
 images: {
    disableStaticImages: true
  }

};

module.exports = withPlugins([optimizedImages], nextConfiguration);
