import { defineCustomElements as defineFacephiSdkCustomComponent } from '../bundle/index.js';
import './sdk-provider.js';

defineFacephiSdkCustomComponent(window);

const copyrightYearElement = document.getElementById('copyright-year');
if (copyrightYearElement) {
	copyrightYearElement.insertAdjacentHTML('afterbegin', new Date().getFullYear());
}
