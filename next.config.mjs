/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  env: {
    NEXT_TELEMETRY_DISABLED: "1",
  },
  async rewrites() {
    return [{ source: "/public/:path*", destination: "/:path*" }];
  },
  async headers() {
    return [
      {
        // Apply to all pages in the app
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            // Allow any site to embed this page in an <iframe>
            value: "frame-ancestors *;",
          },
          // NOTE: X-Frame-Options is legacy and does not support a wildcard;
          // if your platform injects X-Frame-Options: SAMEORIGIN you may need
          // to remove/override it via platform settings.
        ],
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  distDir: ".next",
  trailingSlash: true,
  // Turbopack configuration for Next.js 16
  turbopack: {},
  // Cache optimization
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 2,
  },
  images: {
    // Disable remote patterns
    remotePatterns: [],
  },
};

export default nextConfig;
