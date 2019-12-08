import { Component, Input, Output, EventEmitter, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

export interface INavbarData {
  cssClass: string;
  text: string;
  href: string;
}

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public static firstFancyCity = '';
  public static forFreePartners = [];

  constructor() {}


  @Input() public titleLong = 'Your Title';
  @Input() navBarData: INavbarData[] = [];
  @Output() showUseAsAppDetail = new EventEmitter<void>();
  @Output() findDanceSchool = new EventEmitter<void>();
  public readyForPrompt: boolean;

  public ngOnInit() {}

  public myFunction() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }


  public clickTitle() {
  }
}
