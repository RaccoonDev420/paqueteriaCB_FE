import { Component, Input, OnInit } from '@angular/core';
import { MailPackageDto } from '../../openapi';

@Component({
    selector: 'mail-package-component',
    templateUrl: 'mail-package.component.html',
    styleUrls: ['mail-package.component.scss']
})

export class MailPackageComponent implements OnInit {
    @Input() mailPackage: MailPackageDto;

    constructor() { }

    ngOnInit() { }

    getReceivedDate(receivedArray: number[]): Date {
        // Convert the array to a Date object
        const [year, month, day, hour, minute, second, millisecond] = receivedArray;
        return new Date(year, month - 1, day, hour, minute, second, millisecond);
      }
}