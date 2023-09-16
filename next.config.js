/** @type {import('next').NextConfig} */
require("dotenv").config({
  path: `.env`,
});
const nextConfig = {
  images: {
    domains: [process.env.IMAGE_URL],
  },
  async headers() {
    return [
      {
        source: "/projects",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=1, stale-while-revalidate=59",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
