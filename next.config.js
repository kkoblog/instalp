/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/instagram-course-lp',
        permanent: true,
      },
    ];
  },
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: "canvas" }]; // required to make pdfjs work
    return config;
  },
  output: 'export',  // 静的エクスポートの場合
  basePath: '',      // もしサブディレクトリにデプロイする場合は設定
  images: {
    unoptimized: true  // 静的エクスポートの場合は必要
  }
};

module.exports = nextConfig;