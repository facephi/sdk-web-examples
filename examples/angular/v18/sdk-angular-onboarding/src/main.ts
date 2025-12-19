import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import '@facephi/sdk-web-angular';
import '@facephi/sdk-web-wc';

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch((err) => console.error(err));
