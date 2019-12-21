import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  @Input() individualImpressumData: any;
  @Input() disclaimerStylingData: any;

  constructor() { }

  ngOnInit() {
  }

}
