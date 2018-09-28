import { Routes, RouterModule } from '@angular/router';
import { UserDetails } from './userDetails.component';
import { ModuleWithProviders } from '@angular/core';
export const routes: Routes = [
    {
        path: '',
        component: UserDetails,
        children: []
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
