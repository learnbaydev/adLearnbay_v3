const isProd = process.env.NODE_ENV == "production";
const nextConfig = {
  // assetPrefix: isProd ? "https://d32and0ii3b8oy.cloudfront.net/AdsStatic/" : undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: [
      "react-phone-input-2",
      "react-icons",
      "swiper",
      "mongodb",
      "typed.js",
    ],

    // nextScriptWorkers: true,
  },

  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d32and0ii3b8oy.cloudfront.net",
        pathname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400,
  },

  async redirects() {
    return [
      {
        source: "/apply-for-counselling-marketing",
        destination:
          "/apply-for-counselling-data-science-marketing",
        permanent: true,
      },

      {
        source: "/cyber-security/s2-executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee",
        destination:
          "/s2-executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee",
        permanent: true,
      },


      {
        source: "/fullstack/s2-generative-ai-course-for-professionals",
        destination:
          "/artificial-intelligence/s2-generative-ai-course-for-fullstack-professionals",
        permanent: true,
      },


      {
        source: "/datascience/s2-generative-ai-course-for-managers",
        destination:
          "/artificial-intelligence/s2-generative-ai-course-for-data-science-professionals",
        permanent: true,
      },
    ];
  },
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;
