import { Component, OnInit, Input } from '@angular/core';
import { IContactData } from '../public-api';
import {faHandPointLeft, faHandPointRight} from '@fortawesome/fontawesome-free';

@Component({
  selector: 'lib-contact-options',
  templateUrl: 'contact-options.component.html',
})
export class ContactOptionsComponent implements OnInit {

  @Input() contactOptions: IContactData[] = [];
  faHandPointLeft: any;
  faHandPointRight: any;

  constructor() {
    this.faHandPointLeft = faHandPointLeft;
    this.faHandPointRight = faHandPointRight;
  }

  ngOnInit() {

  }

}
