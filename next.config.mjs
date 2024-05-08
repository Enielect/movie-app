/** @type {import('next').NextConfig} */
// this will help nextjs enable optimization of images hosted on external sources
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
};

export default nextConfig;

