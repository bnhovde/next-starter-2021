module.exports = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*).(woff|woff2|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
  async generateBuildId() {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    }
    return null;
  },
};
