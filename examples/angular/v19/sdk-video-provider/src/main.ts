import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import '@facephi/sdk-web-wc';
import { defineCustomElements } from '@facephi/sdk-web-wc/loader';

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
bootstrapApplication(AppComponent, appConfig).catch((err: any) => console.error(err));

// Bind the custom elements to the window object
defineCustomElements(window);
