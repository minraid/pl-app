import 'reflect-metadata';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AdminModule } from './admin.module';

platformBrowserDynamic().bootstrapModule(AdminModule);
