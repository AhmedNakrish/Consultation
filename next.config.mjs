/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "consulting.back2.puiux.org",
        pathname: "/storage/**",
      },
      {
        protocol: "https", // in case backend also serves HTTPS
        hostname: "consulting.back2.puiux.org",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
