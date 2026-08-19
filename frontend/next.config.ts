import fs from 'fs';
import path from 'path';

const variablesPath = path.join(__dirname, 'src/shared/config/theme.scss');
const additionalData = fs.readFileSync(variablesPath, 'utf8');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '',
                pathname: '/storage/**',
            },
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '',
                pathname: '/storage/**',
            },
        ],
    },
    sassOptions: {
        additionalData,
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8000/api/:path*',
            },
            {
                source: '/storage/:path*',
                destination: 'http://localhost:8000/storage/:path*',
            },
        ];
    },
};

module.exports = nextConfig;