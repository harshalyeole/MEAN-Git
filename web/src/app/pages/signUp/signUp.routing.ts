import {Routes, RouterModule}  from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {signUp} from './signUp.component';
const routes: Routes = [
    {
        path: '',
        component: signUp
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);




