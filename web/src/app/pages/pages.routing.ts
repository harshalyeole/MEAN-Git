import {Routes, RouterModule}  from '@angular/router';
import {Pages} from './pages.component';
import {ModuleWithProviders} from '@angular/core';
import {LoginGuard} from "../filter/app.guard";

export const routes:Routes = [
    {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule'
    },
    {
        path: '',
        loadChildren: 'app/pages/login/login.module#LoginModule'
    },
    {
        path: 'signup',
        loadChildren: 'app/pages/signUp/signUp.module#SignUpModule'
    },
    {
        path: '',
        component: Pages,
        children: [
            {
                path: '',
                redirectTo: 'users',
                pathMatch: 'full'
            },
            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule',
                canActivate: [LoginGuard]
            },
            {
                path: 'userDetails/:username',
                loadChildren: './userDetails/userDetails.module#UserDetailsModule',
                canActivate: [LoginGuard]
            },
            {
                path: 'followers',
                loadChildren: './followers/followers.module#FollowersModule',
                canActivate: [LoginGuard]
            }
        ]
    }
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);
