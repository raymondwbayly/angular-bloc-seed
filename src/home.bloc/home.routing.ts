import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HTTPViewComponent } from './views/http-test/http.component';
import { IndexViewComponent } from './views/index/index.component';
import { VersionViewComponent } from './views/version/version.component';
import { ContactViewComponent } from './views/contact/contact.component';

const routes: Routes = [
  { path: 'index', component: IndexViewComponent },
  { path: 'version', component: VersionViewComponent },
  { path: 'httptest', component: HTTPViewComponent },
  { path: 'contact', component: ContactViewComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
