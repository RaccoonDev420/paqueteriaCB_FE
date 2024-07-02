import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AuthAPIService } from './api/authAPI.service';
import { BranchAPIService } from './api/branchAPI.service';
import { EmployeeAPIService } from './api/employeeAPI.service';
import { MailPackageAPIService } from './api/mailPackageAPI.service';
import { MailPackageAssignationAPIService } from './api/mailPackageAssignationAPI.service';
import { MailPackageStatusAPIService } from './api/mailPackageStatusAPI.service';
import { PermissionAPIService } from './api/permissionAPI.service';
import { ServicePriceAPIService } from './api/servicePriceAPI.service';
import { StorageLockerAPIService } from './api/storageLockerAPI.service';
import { StorageShelfAPIService } from './api/storageShelfAPI.service';
import { TransportationAPIService } from './api/transportationAPI.service';
import { TransportationTripAPIService } from './api/transportationTripAPI.service';
import { WorkPositionAPIService } from './api/workPositionAPI.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
