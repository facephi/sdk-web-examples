# SDK Web WebComponents in React 19 and CRA

Integration with React 19 and CRA.

> [!NOTE]
> More information about the widgets please check [SDK Web WebComponents](https://docs.identity-platform.io/docs/SDK_Web/Web_Components/)

## Prod installation credentials

Create a **.npmrc** file in the root project directory.

  ```bash
  # Facephi registry credentials (prod)
  @facephi:registry=https://facephicorp.jfrog.io/artifactory/api/npm/sdk-web-fphi/
  //facephicorp.jfrog.io/artifactory/api/npm/sdk-web-fphi/:_password=PASSWORD
  //facephicorp.jfrog.io/artifactory/api/npm/sdk-web-fphi/:username=NAME
  //facephicorp.jfrog.io/artifactory/api/npm/sdk-web-fphi/:email=EMAIL
  //facephicorp.jfrog.io/artifactory/api/npm/sdk-web-fphi/:always-auth=true
  ```

## Install dependencies

Run `npm install` or `npm i` to install the dependencies.

> [!NOTE]
> Other package managers such as Bun or Yarn can be used as well.

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

> [!IMPORTANT]
> The widgets will not work unless you add the API key provided by the Facephi team to the **.env** file in the `root` folder.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Widget Customisation in React 19

> [!IMPORTANT]
> It is important to correctly configure the styling approach in React to avoid conflicts with the WebComponents. When using CSS modules or styled-components, ensure proper scoping of styles.

## Notes on CRA vs Vite
[!NOTE] When using Create React App with the FacePhi SDK, you may encounter ESM module resolution issues that require using CRACO to modify webpack configuration. The FacePhi development team recommends using Vite instead of CRA for several reasons:

Vite handles ESM modules natively without additional configuration
Provides faster development and build times
Offers simpler configuration for working with Web Components
Has better compatibility with the latest React versions
Eliminates the need for tools like CRACO to customize webpack configuration
If possible, consider migrating your project to Vite to avoid compatibility issues with the FacePhi SDK.