/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
  experimental: {
    images: {
      // Указываем долгое время кэширования для изображений, поскольку они уже оптимизированы
      minimumCacheTTL: 60 * 60 * 24 * 7, // 7 дней

      unoptimized: true,
    },
  },
};

export default nextConfig;
