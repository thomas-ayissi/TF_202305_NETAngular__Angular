import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform (initialValue: number, ...args: number[]): number {
    return args.reduce((acc, value) => acc + value, initialValue);
  }

}
