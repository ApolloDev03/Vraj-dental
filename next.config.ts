// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   // images: {
//   //   remotePatterns: [
//   //     {
//   //       protocol: 'https',
//   //       hostname: 'vrajdentalclinic.com',
//   //     },
//   //   ],
//   // },
  

//   output: "export",
 
//   images: { unoptimized: true },
//   eslint: { ignoreDuringBuilds: true },
//   typescript: { ignoreBuildErrors: true },
  
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // <-- Required for static build in /out
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  env: {
    NEXT_PUBLIC_API_URL: "https://vrajdentalclinic.com/new_vraj/api",
  },
};

module.exports = nextConfig;