import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeURL'
})
export class SanitizeUrlPipe implements PipeTransform {
  constructor(private readonly sanitizer: DomSanitizer) {}

  transform(value = '', args?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
