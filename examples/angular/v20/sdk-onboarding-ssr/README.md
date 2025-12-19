# SDK Web WebComponents in Angular 20 Server Side Rendering

Integration with Angular 20 SSR

> [!NOTE]
> For more information about the widgets please check [SDK Web WebComponents](https://docs.identity-platform.io/docs/SDK_Web/Web_Components/).

## Requirements

  - Node22+.

  - A frontend browser in latest version.

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

## SSR implementation warnings

It is important to render the Facephi components in the Client Side to avoid malfunctions. Use lazy loading to load those components on the Front (Client Side).

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

> [!IMPORTANT]
> The widgets will not work unless you add the API key provided by the Facephi team to the **.env** file. This file must be created by the user and must contain the variable **NG_APP_API_KEY** with the API key.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Widget Customisation in Angular 20

> [!IMPORTANT]
> It is important to correctly configure the encapsulation of styles in the framework/component. For example, adding the encapsulation to the component file that renders the widget is required in Angular 20.
