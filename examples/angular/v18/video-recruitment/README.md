# SDK Facephi Video Recruitment Widget Component in Angular 18

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9. The purpose of this project is to show how to implement the Video Recruitment Widget component in Angular 18. 

> [!NOTE]
> More information about the widget shown in this example can be found in the [official documentation](https://docs.identity-platform.io/docs/SDK_Web/Web_Components/3.0.x/Components/VideoRecruitment/).

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
> The video recruitment widget will not work unless you add the API key provided by the Facephi team to the **environment.ts** file in the `src/environments` folder.

## Build

Run `bun run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Angular Installation Guide

Add the sdk-web-wc package dependency in the package.json file with the desired version:

```json
"dependencies": {
    "@facephi/sdk-web-wc": "*",
}
```

For the widget to work properly, you must add the web component declaration to the **main.ts** file:

```js
import '@facephi/sdk-web-wc';
import { defineCustomElements } from '@facephi/sdk-web-wc/loader';

// Bind the custom elements to the window object
defineCustomElements(window);
```

Angular needs to know how to handle custom web components (e.g. `facephi-sdk-provider`, `facephi-video-recruitment-widget`), so it is mandatory to add support for CUSTOM_ELEMENTS_SCHEMA to **any component that renders a custom web component**, such as the **app.component.ts** file in this example: 

```js
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './app.component.html',
})
export class AppComponent { }
```

Finally, the only thing left to do is to add the SDK provider that contains the rest of the components to the html, in this example, the **app.component.html** file:

```html
<!-- SDK Provider -->
<facephi-sdk-provider
  [apikey]="provider.apiKey"

  (emitOperationId)="onEmitOperationId($event)"
>
    <!-- Widgets -->
</facephi-sdk-provider>
```

The provider and the video recruitment component will offer some events in order to control their performance.

```js
// Provider Events
onEmitError(event: CustomEvent<{ statusCode: number; message: string }>) {
  console.log('%c%s', 'color: lime;', `[PROVIDER] EmitError: ${event.detail}`);
}

onEmitOperationId(event: CustomEvent<string>) {
  console.log('%c%s', 'color: lime;', `[PROVIDER] EmitOperationId: ${event.detail}`);
}

onEmitSessionId(event: CustomEvent<string>) {
  console.log('%c%s', 'color: lime;', `[PROVIDER] EmitSessionId: ${event.detail}`);
}
```