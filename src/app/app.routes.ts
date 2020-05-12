import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/home/index',
            },
            { path: 'home', loadChildren: 'home.bloc/home.module#HomeBlocModule' },
            // {path: '**', redirectTo: '/pagenotfound'}
        ]),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
