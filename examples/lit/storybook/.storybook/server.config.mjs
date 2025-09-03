import { storybookPlugin } from "@web/dev-server-storybook";

export default {
  nodeResolve: true,
  open: true,
  port: 3000,
  plugins: [storybookPlugin({ type: "web-components" })],
};