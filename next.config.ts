import type { NextConfig } from "next";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

const hostname = supabaseUrl ? new URL(supabaseUrl).hostname : "";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "172.20.10.4:3000",
    "localhost:3000",
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: hostname,
      }
    ]
  }
};

export default nextConfig;