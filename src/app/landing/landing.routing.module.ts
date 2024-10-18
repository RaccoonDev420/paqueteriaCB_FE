import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { WellcomeComponent } from './pages/welcome/welcome.component';
import { InfoComponent } from './pages/info/info.component';
import { BranchsComponent } from './pages/branchs/branchs.component';
import { PackageComponent } from './pages/package/package.component';


const childs: Routes = [
    {
        path: '', component: HomeComponent, children: [
            {path: 'login', component: LoginComponent},
            {path: 'home', component: WellcomeComponent},
            {path: 'info', component: InfoComponent},
            {path: 'branchs', component: BranchsComponent},
            {path: 'package', component: PackageComponent},
            {path: '**', redirectTo: '/home'}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(childs)],
    exports: [RouterModule],
})
export class LandingRoutingModule { }
