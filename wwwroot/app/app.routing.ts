import { ModuleWithProviders    } from "@angular/core";
import { Routes, RouterModule   } from "@angular/router";

import { PageNotFoundComponent  }   from './Page-not-found.component';
import { IndexComponent     }   from './Controllers/index-component';

const appRoutes: Routes = [
    {
        path: "",
        component: IndexComponent
    },

    {
        path: "home",
        redirectTo: ""
    },

    {
        path: "git",
        loadChildren: 'app/Controllers/Git/git-module#main'
    },

    //{
    //    path: "login",
    //    component: LoginComponent
    //},

    //{
    //    path: "item/:id",
    //    component: ItemDetailsComponent
    //},

    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const AppRoutingProviders: any[] = [
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);