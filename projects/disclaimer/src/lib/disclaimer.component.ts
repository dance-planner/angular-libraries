import { Component, OnInit, Input } from '@angular/core';
import { IStylingData } from './disclaimer.interfaces';

@Component({
  selector: 'lib-disclaimer',
  templateUrl: './disclaimer.component.html'
})
export class DisclaimerComponent {

  @Input() public stylingData: IStylingData = {
    textAlign: 'center',
    bgColor: 'inherit'
  };
}
