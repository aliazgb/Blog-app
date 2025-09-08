/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog-app-backend-29rf.onrender.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // 👈 کل مسیرهای Cloudinary
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://blog-app-backend-29rf.onrender.com/:path*",
      },
    ];
  },
};

export default nextConfig;
