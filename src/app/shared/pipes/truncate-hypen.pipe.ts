import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateHypen'
})
export class TruncateHypenPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace('-','');
  }
}
