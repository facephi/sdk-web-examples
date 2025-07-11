import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { defineCustomElements as defineFacephiVideoID } from '@facephi/sdk-video-id/loader';
defineFacephiVideoID(window);

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
