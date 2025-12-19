import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import '@facephi/sdk-web-angular';
import '@facephi/sdk-web-wc';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
