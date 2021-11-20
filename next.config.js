/** @type {import('next').NextConfig} */
const sixtURL = "https://us-central1-sixt-hackatum-2021.cloudfunctions.net/api"

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/vehicles',
        destination: `${sixtURL}/vehicles`
      }
    ]
  }
}
