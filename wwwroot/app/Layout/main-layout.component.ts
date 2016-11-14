import {Component} from "@angular/core";

import { LayoutTopHeader    }   from "./layout-header.component";
import { LayoutFooter       }   from "./layout-footer.component";


@Component({
    selector: 'angular2playground',
    template: `
                <top-header></top-header>
                <!-- Main content -->
                <main class="main">
                    <div class="container-fluid">
                        <router-outlet></router-outlet>
                    </div>
                </main>
                <bottom-footer></bottom-footer>
              `
})

export class MainLayout {
}

export const LAYOUT_COMPONENTS = [LayoutFooter, LayoutTopHeader];