import type { NextConfig } from "next";

const API_URL = process.env.API_PROXY_URL || "http://localhost:4000";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/businesses/urgent-care",
        destination: "/businesses",
        permanent: true,
      },
      {
        source: "/newsroom/urgent-care-launch",
        destination: "/newsroom",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
