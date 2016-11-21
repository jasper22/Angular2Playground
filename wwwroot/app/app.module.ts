import { NgModule       }      from '@angular/core';
import { BrowserModule  }      from '@angular/platform-browser';
import { HttpModule     }      from "@angular/http";
import { FormsModule    }      from "@angular/forms";
import { RouterModule   }      from "@angular/router";
import "rxjs/Rx";


// Layout components
import { MainLayout, LAYOUT_COMPONENTS  }   from './Layout/main-layout.component';

// Views
import { PageNotFoundComponent  }   from './Page-not-found.component';
import { IndexComponent     }   from './Controllers/index-component';
import { GitModule          }   from './Controllers/Git/git-module';

// Routing
import { AppRouting         }    from './app.routing';

@NgModule({
    // Specifies a list of directives/pipes that belong to this module.
    declarations: [
        LAYOUT_COMPONENTS,
        MainLayout,
        PageNotFoundComponent,
        IndexComponent,
    ],

    // Specifies a list of modules whose exported directives/pipes should be available to templates in this module. This can also contain ModuleWithProviders.
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        AppRouting,

        GitModule
    ],

    // Defines the set of injectable objects that are available in the injector of this module.
    providers: [
        //ItemService
    ],

    // Specifies a list of directives/pipes/modules that can be used within the template of any component that is part of an Angular module that imports this Angular module.
    //exports: [],

    // Bootstrap
    bootstrap: [
        MainLayout
    ]
})


export class AppModule { }