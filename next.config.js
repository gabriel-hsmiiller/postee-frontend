/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    env: {
        API_URL: process.env.API_URL,
    }
}

module.exports = nextConfig;