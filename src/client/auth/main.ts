import 'core-js/client/shim'
import 'reflect-metadata';
import 'zone.js';
import '../shared/rxjs-extensions';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AuthModule } from './auth.module';

platformBrowserDynamic().bootstrapModule(AuthModule);
