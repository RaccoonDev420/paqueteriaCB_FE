import { NgModule } from '@angular/core';

import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VideoComponent } from './components/video/video.component';
import { CommonModule } from '@angular/common';
import { BranchMapComponent } from './components/branch-map/branch-map.component';
import { OrderByPipe } from './pipe/order-by-pipe';
import { MailPackageComponent } from './components/mail-package/mail-package.component';
import { DateFormatPipe } from './pipe/date-format-pipe';

@NgModule({
    imports: [
        PrimeNgModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        PrimeNgModule,
        MenuComponent,
        VideoComponent,
        BranchMapComponent,
        CommonModule,
        OrderByPipe,
        MailPackageComponent,
        DateFormatPipe
    ],
    declarations: [
        MenuComponent,
        VideoComponent,
        BranchMapComponent,
        OrderByPipe,
        MailPackageComponent,
        DateFormatPipe,
    ],
    providers: [],
})
export class SharedModule { }
