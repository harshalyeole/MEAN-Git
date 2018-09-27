import { Routes, RouterModule } from '@angular/router';
import { Users } from './users.component';
import { ModuleWithProviders } from '@angular/core';
export const routes: Routes = [
    {
        path: '',
        component: Users,
        children: []
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
