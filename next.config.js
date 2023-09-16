/** @type {import('next').NextConfig} */
require("dotenv").config({
  path: `.env`,
});
const nextConfig = {
  images: {
    domains: [process.env.IMAGE_URL],
  },
};

module.exports = nextConfig;
