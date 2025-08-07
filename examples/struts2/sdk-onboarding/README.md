# SDK Web WebComponents in Struts2 with Thymeleaf

Integration with Struts2

> [!NOTE]
> For more information about the widgets please check [SDK Web WebComponents](https://docs.identity-platform.io/docs/SDK_Web/Web_Components/).

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

## Prerequisites

- Node.js >= 18
- Bun Package Manager (v1.1.32 or higher)
- Java v21
- Apache Maven v3.9.11

## Install dependencies

Go to the **frontend** folder and run `npm install` or `npm i` to install the dependencies.

> [!NOTE]
> Other package managers such as Bun or Yarn can be used as well.

## Copy the frontend resources

After running the command ```npm install ``` in the frontend folder, go to the root of the project and run the following command to copy the bundle folder of the sdk-web-wc into the public folder of the Java project:

```sh
mvn generate-resources
```

## Development server

Run `mvn jetty:run` for a dev server. Then access to [localhost](http://localhost:3000/struts2-example/index.action).
Use **CTRL+C** to stop the server.

> [!IMPORTANT]
> The widgets will not work unless you add the API key provided by the Facephi team to the **.env** file, which is located in the root of the project.
