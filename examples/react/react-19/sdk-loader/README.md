# SDK-Loader in React 19 with TypeScript and Vite

Integration of the `@facephi/sdk-loader` package with React 19, TypeScript, and Vite.

> [!NOTE]
> The `@facephi/sdk-loader` package provides a lightweight way to dynamically load and initialize the Facephi SDK from CDN. The `@facephi/sdk-web-wc` package is loaded at runtime from CDN, not bundled with your application.

## Features

- **Dynamic CDN Loading**: Automatically loads `@facephi/sdk-web-wc` from CDN at runtime
- **Zero Bundle Size Impact**: The SDK is not bundled with your application
- **Simple API**: Just call `loadSdk()` with your API key
- **TypeScript Support**: Full type definitions included

## Install dependencies

Run `npm install` or `npm i` to install the dependencies.

> [!NOTE]
> Other package managers such as Bun or Yarn can be used as well.

## Environment Configuration

Create a `.env` file in the root of the project:

```bash
VITE_API_KEY=YOUR_API_KEY
```

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

> [!IMPORTANT]
> The SDK will not work unless you add the API key provided by the Facephi team to the **.env** file.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## SDK Loader Usage

The SDK Loader provides a simple API to initialize the Facephi SDK:

```typescript
import { loadSdk } from '@facephi/sdk-loader';

const sdkElement = await loadSdk({
  apiKey: 'your-api-key',
  containerId: 'sdk-container',
});

console.log('sdkElement', sdkElement);

// Listen for SDK events
sdkElement?.addEventListener('emitIDVIntegration', (event) => {
  console.log('emitIDVIntegration', event);
});
```

## Widget Customisation

> [!IMPORTANT]
> When styling Web Components in React, use global CSS with CSS variables as documented in the SDK documentation.
