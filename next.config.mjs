/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: false,
  },
  // Ensure static files are served correctly
  trailingSlash: false,
  // Enable experimental features if needed
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
