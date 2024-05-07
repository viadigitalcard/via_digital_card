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
        source: '/card/629af8a9326cb232cfa00b01',
        destination: 'https://fliick.cards',
        permanent: true,
      }
    ]
  },
};
