import "./styles.css";

import { defineCustomElements } from "@facephi/sdk-web-wc/loader";
// Bind the custom elements to the window object
defineCustomElements(window);

const copyrightYearElement = document.getElementById("copyright-year");
if (copyrightYearElement) {
	copyrightYearElement.textContent = new Date().getFullYear().toString();
}

