# SDK Web WebComponents in Angular 18

Integration with Angular 18

> [!NOTE]
> For more information about the widgets please check [SDK Web WebComponents](https://docs.identity-platform.io/docs/SDK_Web/Web_Components/).

> [!TIP]
> Install the "Angular Language Service" extension to access all available development tools for Angular implementations.

>[!WARNING]
> This implementation demonstrates how to integrate the library using NgModules instead of standalone components. It is recommended to use standalone components instead.

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
> The widgets will not work unless you add the API key provided by the Facephi team to the **.env** file. This file must be created by the user and must contain the variable **NG_APP_API_KEY** with the API key.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Widget Customisation in Angular 18

With the latest releases, the Selphi and SelphID Widgets can be customized with the following [CSS variables](https://docs.identity-platform.io/docs/SDK_Web/Web_Components/3.0.x/Components/SDKProvider/provider-Customization#styling-customization) applied to the facephi-sdk-provider tag.
