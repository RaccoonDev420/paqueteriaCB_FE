import { Component, OnInit } from '@angular/core';
import { BranchAPIService, BranchDto, BranchScheduleDto, GenericResponseListBranchDto } from 'src/app/shared/openapi';

@Component({
    selector: 'branchs-component',
    templateUrl: 'branchs.component.html',
    styleUrls: ['branchs.component.scss']
})

export class BranchsComponent implements OnInit {
    branches: Array<BranchDto>
    
    constructor(
        private branchService: BranchAPIService
    ) { }

    ngOnInit() { 
        
        this.branchService.findAll().subscribe(data => {
           if(data.success){
            this.branches = data.data;
           }
        })
        
    }

    getSchedules(branch: BranchDto): BranchScheduleDto[] {
        return Array.from(branch.schedules || []);
      }
}