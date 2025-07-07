# SDK Web WebComponents in LitElements.

Integration with LitElements

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

## Customising widgets in LitElements

> [!IMPORTANT]
> If you customise styles, remember that WebComponents may use the shadow DOM. If you need your styles to be global, disable the shadow DOM in your Lit components by using createRenderRoot() { return this; }.
