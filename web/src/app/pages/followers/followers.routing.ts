import { Routes, RouterModule } from '@angular/router';
import { Followers } from './followers.component';
import { ModuleWithProviders } from '@angular/core';
export const routes: Routes = [
    {
        path: '',
        component: Followers,
        children: []
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
