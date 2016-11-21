import {Component} from "@angular/core";

import { LayoutTopHeader    }   from './layout-header.component';
import { LayoutFooter       }   from './layout-footer.component';
import { LayoutLeftSideMenu }   from './left-side-menu-component';
import { LayoutRightSideMenu}   from './right-side-menu-component';

import { SidebarToggleDirective }   from './Helpers/SidebarToggleDirective';
import { NAV_DROPDOWN_DIRECTIVES}   from './Helpers/NavDropdownDirective';


@Component({
    selector: 'angular2playground',
    template: `
                <top-header></top-header>
                <left-menu></left-menu>
                    <main class="main">
                        <div class="container-fluid">
                            <router-outlet></router-outlet>
                        </div>
                    </main>
                <right-menu></right-menu>
                <bottom-footer></bottom-footer>
              `
})

export class MainLayout {
}

export const LAYOUT_COMPONENTS = [LayoutFooter, LayoutTopHeader, LayoutLeftSideMenu, LayoutRightSideMenu, SidebarToggleDirective, NAV_DROPDOWN_DIRECTIVES];