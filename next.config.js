 module.exports = {
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
async redirects() {
    return [
      {
        source: '/',
        destination: '/auth/signin',
        permanent: true,
      },
       
        {
        source: '/card/634cf6af604ad3c0bdf69a9d',
        destination: 'https://fliick.cards/harsh_vasant',
        permanent: true,
      },
        {
        source: '/card/6555dd19725a92114895bcd2',
        destination: 'https://fliick.cards/anish_bedmutha',
        permanent: true,
      }
    ]
  },
};
