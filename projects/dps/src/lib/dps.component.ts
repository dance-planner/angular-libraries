import { Component, OnInit, Input } from '@angular/core';
import { IDPSData } from './dps.interface';


@Component({
  selector: 'lib-dps',
  templateUrl: './dps.component.html'
})
export class DpsComponent {
  @Input() individualDPSData: IDPSData = {
    textAlign: 'center',
    bgColor: 'inherit'
  };
}
