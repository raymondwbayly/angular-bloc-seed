/**
 * DO NOT TOUCH
 * This file is merely a passthrough for the angular application and does not require any configuration.
 *
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '../config/environments/environment';
import { AppModule } from './app/index';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => err = err);
