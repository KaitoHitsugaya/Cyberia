import fs from 'fs';
import path from 'path';

const variablesPath = path.join(__dirname, 'src/shared/config/theme.scss');
const additionalData = fs.readFileSync(variablesPath, 'utf8');

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        additionalData,
    },
};

module.exports = nextConfig;