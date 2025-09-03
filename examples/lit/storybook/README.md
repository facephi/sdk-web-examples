# Facephi SDK Web Components + Lit + Web Dev Server + Storybook

This example demonstrates how to integrate **Facephi SDK Web Components** in a Lit application that is served with [`@web/dev-server`](https://modern-web.dev/docs/dev-server/overview/) and Storybook [@web/storybook-builder](https://modern-web.dev/docs/storybook-builder/overview/).

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

### Web Integration

```bash
npm run start   # starts on http://localhost:3000
```
### Storybook

```bash
npm run storybook   # starts on http://localhost:3000
```

> **Important**
> The widgets will not work unless you provide a valid **API key**. Add the key that Facephi supplies replacing the placeholder value in this string (`PUT_YOUR_LICENSE_KEY_HERE`).

---
