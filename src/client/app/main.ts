import 'reflect-metadata';
import 'zone.js';
import '../shared/rxjs-extensions';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
