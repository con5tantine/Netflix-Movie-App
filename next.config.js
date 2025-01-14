/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "image.tmdb.org",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "gogocdn.net",
      "res.cloudinary.com",
    ],
    unoptimized: true,
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
