/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ["clsx"],
  },
};

module.exports = nextConfig;
