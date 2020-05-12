import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import {ConfigService} from './index';

@NgModule({
  declarations: [],
  imports: [],
  providers: [ConfigService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule { }
