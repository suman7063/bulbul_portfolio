/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for Netlify deployment
  images: {
    unoptimized: true
  }
};

export default nextConfig;
