import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.background-color]': "appHighlight() ? '#fff3cd' : null",
  },
})
export class HighlightDirective {
  appHighlight = input(false);
}
