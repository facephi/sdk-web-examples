# SDK Components Selphi and SelphID in Angular 18

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9. The purpose of this project is to show how to implement the SDK Components Selphi and SelphID in Angular 18. Older versions of the framework (Angular 16 and 17) are also compatible with this example.

> [!NOTE]
> More information about the widgets ([Selphi](https://docs.identity-platform.io/docs/SDK_Web/Web_Components/3.0.x/Components/SelphiWidget/) and [SelphID](https://docs.identity-platform.io/docs/SDK_Web/Web_Components/3.0.x/Components/SelphidWidget/)) shown in this example can be found in the [official documentation](https://docs.identity-platform.io/docs/SDK_Web/Web_Components/3.0.x/quick-start).

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
> The widgets will not work unless you add the API key provided by the Facephi team to the **environment.ts** file in the `src/environments` folder.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.



# SDK Web WebComponents in Angular 18

Integration with Angular 18

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
> The widgets will not work unless you add the API key provided by the Facephi team to the **environment.ts** file in the `src/environments` folder.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Widget Customisation in Angular 18

Both widgets of Selphi and SelphID can be customised in Angular 18. To do this, you can use the CSS variables described in the official documentation for [Selphi](https://docs.identity-platform.io/docs/SDK_Web/Web_Components/3.0.x/Components/SelphiWidget/selphi-customization) and [SelphID](https://docs.identity-platform.io/docs/SDK_Web/Web_Components/3.0.x/Components/SelphidWidget/selphid-customization) and apply them to the CSS file of the component that renders the widget:

```css
/* selphi-component.component.css */

/* Selphi Component styles */
facephi-selphi {
  --color-primary: #c3012f;
  --color-progress-bar: #c3012f;
  --color-hover: #c3012f77;
  --color-loading: #c3012f;
  --color-tutorial-tshirt: #c3012f;
  --color-tutorial-progress: #c3012f;
}
```

> [!IMPORTANT]
> It is important to correctly configure the encapsulation of styles in the framework/component. For example, adding the encapsulation to the component file that renders the widget is required in Angular 18.
