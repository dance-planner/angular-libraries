import { Component, OnInit, Input } from '@angular/core';
import { IStylingData } from '../../../../disclaimer/src/public-api';
import { IIndividualImpressumData } from '../../../../impressum/src/public-api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() public stylingData: IStylingData;
  @Input() public individualImpressumData: IIndividualImpressumData;

  constructor() { }

  ngOnInit() {
  }

}
