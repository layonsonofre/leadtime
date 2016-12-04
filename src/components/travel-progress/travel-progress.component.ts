import { Component, Input } from '@angular/core';

@Component({
   selector: 'travel-progress',
   templateUrl: './travel-progress.component.html'
})

export class TravelProgressComponent {

   @Input() from: string;
   @Input() value: string;
   @Input() to: string;

   constructor() {
      console.log('from ' + this.from);
      console.log('Hello TravelProgress');
   }

}
