/** @type {import('next').NextConfig} */

module.exports = {
  target: "serverless",
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/vehicles',
        destination: 'https://us-central1-sixt-hackatum-2021.cloudfunctions.net/api/vehicles'
      }
    ]
  }
}
