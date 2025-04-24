/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com', 'i.gifer.com', 'media.tenor.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oiaqhtojzhljjxafqlew.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}

module.exports = nextConfig 