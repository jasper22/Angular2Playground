﻿import { ModuleWithProviders    } from "@angular/core";
import { Routes, RouterModule   } from "@angular/router";

//import { MainLayout         }   from './Layout/main-layout.component';
import { IndexComponent     }   from './Controllers/index-component';
//import { HomeComponent          } from "./Home.component";
//import { AboutComponent         } from "./About.component";
//import { LoginComponent         } from "./Login.component";
// import { PageNotFoundComponent  } from "./Page-not-found.component";
//import { ItemDetailsComponent   } from "./Item-details.component";

const appRoutes: Routes = [
    {
        path: "",
        component: IndexComponent
    },

    {
        path: "home",
        redirectTo: ""
    },

    //{
    //    path: "about",
    //    component: AboutComponent
    //},

    //{
    //    path: "login",
    //    component: LoginComponent
    //},

    //{
    //    path: "item/:id",
    //    component: ItemDetailsComponent
    //},
    //{
    //    path: '**',
    //    component: PageNotFoundComponent
    //}
];

export const AppRoutingProviders: any[] = [
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);