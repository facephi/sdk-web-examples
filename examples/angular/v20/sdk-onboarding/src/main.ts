import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import '@facephi/sdk-web-wc';
import { defineCustomElements as defineFacephiCustomElements } from '@facephi/sdk-web-wc/loader';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Bind the custom elements to the window object
defineFacephiCustomElements(window);