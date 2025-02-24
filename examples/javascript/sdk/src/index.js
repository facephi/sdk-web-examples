import { demo } from "./scripts/provider";
import "./styles.css";

import { defineCustomElements } from "@facephi/sdk-web-wc/loader";
// Bind the custom elements to the window object
defineCustomElements(window);

document.getElementById("copyright-year").textContent =
	new Date().getFullYear();

demo();
