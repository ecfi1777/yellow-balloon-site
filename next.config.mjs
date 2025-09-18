/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Redirect main services page to glamour parties (most popular service)
      {
        source: '/services',
        destination: '/services/glamour-parties',
        permanent: true,
      },
      // Redirect services with pricing anchor to lice screening pricing section
      {
        source: '/services#pricing',
        destination: '/services/lice-screening#pricing',
        permanent: true,
      },
      // Redirect services with glamour anchor to glamour parties
      {
        source: '/services#glamour',
        destination: '/services/glamour-parties#overview',
        permanent: true,
      },
      // Redirect services with lice anchor to lice screening
      {
        source: '/services#lice',
        destination: '/services/lice-screening#overview',
        permanent: true,
      },
      // Alternative services paths
      {
        source: '/all-services',
        destination: '/services/glamour-parties',
        permanent: true,
      },
      {
        source: '/services/pricing',
        destination: '/services/lice-screening#pricing',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
