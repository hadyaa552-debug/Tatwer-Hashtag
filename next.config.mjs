/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'prod-images.nawy.com' },
      { protocol: 'https', hostname: 'tatwermisr.org' },
    ],
  },
}
export default nextConfig
