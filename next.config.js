const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra(
  (module.exports = {
    async redirects() {
      return [
        {
          source: '/about',
          destination: '/',
          permanent: true
        },
        {
          source: '/hello-vercel',
          destination: 'https://vercel.com',
          permanent: false
        }
      ]
    }
  })
)
