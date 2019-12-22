import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-ng-range',
  templateUrl: './ng-range.component.html',
  styleUrls: ['./ng-range.component.css']
})
export class NgRangeComponent {

  @Input() currentRange: number;
  @Input() maximumRange: number;
  @Input() minimumRange: number;
  @Input() cityName: string;
  @Output() setValue = new EventEmitter<number>();

  public handleChange() {
    this.setValue.emit(this.currentRange);
  }
}
