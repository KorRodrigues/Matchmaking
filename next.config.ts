import type { NextConfig } from "next";
import withPWA from "next-pwa";

const createWithPWA = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com'],
  },
}

const withPWAConfig = createWithPWA(nextConfig)

export default withPWAConfig;
