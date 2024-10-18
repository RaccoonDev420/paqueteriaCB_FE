import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

    transform(value: any, format: string = 'yyyy-MM-dd HH:mm:ss'): string {
        const date = new Date(value[0], value[1] - 1, value[2], value[3], value[4], value[5], value[6]);
        
        // Use Angular's date pipe to format the date
        const options: Intl.DateTimeFormatOptions = {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false
        };

        return new Intl.DateTimeFormat('es-MX', options).format(date);
      }

}