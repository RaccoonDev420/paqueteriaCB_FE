import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing.routing.module';
import { WellcomeComponent } from './pages/welcome/welcome.component';
import { BranchsComponent } from './pages/branchs/branchs.component';
import { PackageComponent } from './pages/package/package.component';

@NgModule({
    imports: [
        SharedModule,
        LandingRoutingModule,
    ],
    exports: [],
    declarations: [
        HomeComponent,
        LoginComponent,
        WellcomeComponent,
        BranchsComponent,
        PackageComponent
    ],
    providers: [],
})
export class LandingModule { }
