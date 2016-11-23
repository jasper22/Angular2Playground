import { Component                      }   from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GitServerConfiguration }   from './GitServerConfiguration';

@Component ({
    moduleId: module.id,
    selector: 'git-setup',
    templateUrl: '/Git/GitSetupView'
})

export class GitSetup {
    
    public gitServer : GitServerConfiguration;
    
    // Constructor
    public constructor(private router: Router)
    {
        // Test
        this.gitServer = new GitServerConfiguration("www.google.com", "Bob", "");
    }

//    public get ServerConfiguration() : GitServerConfiguration
//    {
//        return this.gitServer;
//    }

//    public set ServerConfiguration(value: GitServerConfiguration)
//    {
//        this.gitServer = value;
//    }

    onSubmit()
    {
        this.router.navigate(['/git']);
    }
}