import 'core-js/client/shim'
import 'reflect-metadata';
import 'zone.js';
import '../shared/rxjs-extensions';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AdminModule } from './admin.module';

platformBrowserDynamic().bootstrapModule(AdminModule);
