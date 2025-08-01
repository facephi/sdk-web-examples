# Facephi SDK Web Components + Lit + Web Dev Server

This example demonstrates how to integrate **Facephi SDK Web Components** in a Lit application that is served with [`@web/dev-server`](https://modern-web.dev/docs/dev-server/overview/).

> **Docs**
> For the full list of widgets, public API and usage examples please refer to the official documentation: [SDK Web WebComponents](https://docs.identity-platform.io/docs/SDK_Web/Web_Components/).

---

## Prerequisites

1. Node.js ≥ 18
2. npm (comes bundled with Node.js)

---

## Private registry access

The SDK packages are hosted in a private registry. Create a **.npmrc** file in the root of the project and add your credentials:

```bash
# Facephi registry credentials (prod)
@facephi:registry=https://facephicorp.jfrog.io/artifactory/api/npm/sdk-web-fphi/
//facephicorp.jfrog.io/artifactory/api/npm/sdk-web-fphi/:_password=<PASSWORD>
//facephicorp.jfrog.io/artifactory/api/npm/sdk-web-fphi/:username=<USERNAME>
//facephicorp.jfrog.io/artifactory/api/npm/sdk-web-fphi/:email=<EMAIL>
//facephicorp.jfrog.io/artifactory/api/npm/sdk-web-fphi/:always-auth=true
```

---

## Install dependencies

```bash
npm install
```

> You can still use `yarn install` or `bun install` if you prefer.

---

## Development server

```bash
npm run dev   # starts @web/dev-server on http://localhost:3000
```

The application will live-reload whenever you change any source file.

> **Important**
> The widgets will not work unless you provide a valid **API key**. Add the key that Facephi supplies to a `.env` file in the project root or replace the placeholder value in `src/lit-sdk-component.js` (`PUT_YOUR_LICENSE_KEY_HERE`).

---

## Cleaning the workspace

```bash
npm run clean   # removes dist/, node_modules/ and lock files
```

---

## Customising widgets

If you want to apply global styles remember that Web Components are rendered inside the **Shadow DOM**. You can opt-out by overriding `createRenderRoot` in your Lit elements:

```js
createRenderRoot() {
  return this; // renders into light DOM so global styles apply
}
```

Browse `src/lit-sdk-component.js` for a complete example of combining several widgets and listening to their events.
