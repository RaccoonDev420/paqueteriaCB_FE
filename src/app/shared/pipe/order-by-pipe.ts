import { Pipe, PipeTransform } from '@angular/core';
import { BranchScheduleDto } from '../openapi';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(schedules: BranchScheduleDto[], orderBy: string = 'orderBy'): BranchScheduleDto[] {
    return schedules.sort((a, b) => a[orderBy] - b[orderBy]);
  }

}