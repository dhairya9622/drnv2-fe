import withBundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzerConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
    reactStrictMode: true, // Enables React's strict mode to highlight potential problems in the application.
    swcMinify: true, // Uses the SWC compiler for faster builds and smaller bundles.
    images: {
        domains: ['yourdomain.com'], // Replace with the domains you use for images.
    },
    webpack(config, { isServer }) {
        if (!isServer) {
            config.resolve.alias['@sentry/node'] = '@sentry/browser';
        }
        return config;
    },
};

export default withBundleAnalyzerConfig(nextConfig);
