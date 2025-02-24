# SDK Web implementation in Vue 3

This code is an example of Web SDK React implementation in Vue 3 Framework.



## Launch demo (Development server)

First, run `bun install` to install the necessary dependencies, then run `bun run dev` for a development server. A new tab will open with the demo application at `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

> [!IMPORTANT]
> The widgets will not work unless you add the API key provided by the Facephi team to the **.env** file in the `root` folder of this example.

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


## Requirements

- Package loader (Bun in this example).

- Web SDK credentials (given by Facephi team: license key and .npmrc)

- Vue 3 project (v 3.5.13 in this example).

- Latests version of browsers.


> [!NOTE]  
> This code is an example and may vary depending on your project configuration


For more information check the SDK Web Widget Docs.

