/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/quiz-next' : '',
  assetPrefix: isProd ? `/quiz-next` : '',
};

export default nextConfig;
