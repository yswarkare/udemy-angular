import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], order: string = 'ASCE', propName: string): object[] {
    if (value.length > 0) {
      value.sort((a: any, b: any): number => {
        const sortingFactor = a[propName] > b[propName];
        if (order === 'ASCE') {
          return sortingFactor ? 1 : -1;
        } else if (order === 'DESC') {
          return sortingFactor ? -1 : 1;
        }
        return 0;
      });
    }
    return value;
  }
}
