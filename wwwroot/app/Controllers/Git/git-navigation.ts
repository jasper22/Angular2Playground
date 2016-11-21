import { ModuleWithProviders    } from "@angular/core";
import { Routes, RouterModule   } from "@angular/router";

import { GitSetup       }   from './git-setup.component';
import { GitLog         }   from './git-log.component';

const appRoutes: Routes = [
    {
        path: "main",
        redirectTo: "git/setup"
    },

    {
        path: "git/setup",
        component: GitSetup
    },

    {
        path: "git/log",
        component: GitLog
    }
];

export const AppRoutingProviders: any[] = [
];

export const GitRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);

