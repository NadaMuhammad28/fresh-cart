import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'usdToEgp',
})
export class UsdToEgpPipe implements PipeTransform {
  transform(value: string): number {
    const rate = 30.85;
    return +value * rate;
  }
}
