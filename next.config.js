/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fakeimg.pl',
        port: '',
        pathname: '/**',
      },
      {
        protocol:"https",
        hostname:"cxxdsuppymvjtnqdoawf.supabase.co",
        port:"",
        pathname:'/**'
      }
    ],
  }
};

module.exports = nextConfig;

/* assets.aceternity.com
https://fakeimg.pl/400x400
*/