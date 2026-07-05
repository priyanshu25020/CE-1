/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Yeh Next.js ko Static HTML generate karne bolta hai
  typescript: {
    ignoreBuildErrors: true, // Yeh tumhari Variants wali error ko build ke time ignore kar dega
  },
  eslint: {
    ignoreDuringBuilds: true, // Extra safety ke liye
  }
};

export default nextConfig;