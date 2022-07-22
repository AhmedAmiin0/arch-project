/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
module.exports = {
    reactStrictMode: false,
    ...nextTranslate(),
    images: {
        domains: ['localhost', '127.0.0.1:8000', '127.0.0.1'],
    }

}
