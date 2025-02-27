import { defineCustomElements } from "@facephi/sdk-web-wc/loader";

defineCustomElements(window);

const copyrightYearElement = document.getElementById("copyright-year");
if (copyrightYearElement) {
	copyrightYearElement.textContent = new Date().getFullYear().toString();
}

