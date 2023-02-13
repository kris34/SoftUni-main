import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTime'
})
export class ShortenTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
