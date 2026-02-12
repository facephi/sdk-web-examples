import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: false,
	// Webpack configuration required for Stencil web components
	// Turbopack (default bundler in Next.js 16) has issues with Stencil's
	// dynamic imports that use special webpack comments.
	// This configuration allows webpack to handle these imports correctly.
	webpack: (config, { isServer }) => {
		// Configuration required for Stencil web components
		// Only apply configuration on the client (browser)
		if (!isServer) {
			// Prevent errors when modules attempt to use 'fs' (file system)
			// which doesn't exist in the browser
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
			};
		}
		return config;
	},
};

export default nextConfig;
