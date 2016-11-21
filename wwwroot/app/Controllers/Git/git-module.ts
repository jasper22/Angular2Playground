import { NgModule       }   from '@angular/core';
import { CommonModule   }   from '@angular/common';
import { FormsModule    }   from '@angular/forms';


// Views
import { GitSetup       }   from './git-setup.component';
import { GitLog         }   from './git-log.component';

// Navigation
import { GitRouting     }   from './git-navigation';


@NgModule({
    imports: [CommonModule, FormsModule, GitRouting],
    declarations:   [GitSetup, GitLog],
    exports:    [],
    providers:  []
})

export class GitModule{
}