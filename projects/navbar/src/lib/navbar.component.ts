import { Component, Input, Output, EventEmitter, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public static firstFancyCity = '';
  public static forFreePartners = [];

  constructor() {
    this.titleLong = 'Dance Planner';

  }


  @Input() public titleLong = 'Test';
  @Input() texts: string[] = [];
  @Output() showUseAsAppDetail = new EventEmitter<void>();
  @Output() findDanceSchool = new EventEmitter<void>();
  // public titleShort;
  // public famousCounter = 0;
  // public displayInput = false;
  // public adminkey = '';
  public readyForPrompt: boolean;



  public ngOnInit() {


    setTimeout(() => {
        this.titleLong = `Dance Planner ${NavbarComponent.firstFancyCity}`;
      }, 7000);
    // setTimeout(() => {
    //   this.backendService.getForFreePartners()
    //     .subscribe((result) => {
    //       NavbarComponent.forFreePartners =  result;
    //     });
    //   }, 60000);

  }

  public myFunction() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }

  public showErgebnisseFiltern() {
    return document.documentElement.scrollTop === 0 ? false : true;
  }

  public clickFind() {
    // if (this.router.url === '/') {
    //   this.router.navigateByUrl('/tips-and-tricks');
    //   setTimeout(() => {
    //     this.router.navigateByUrl('/');
    //   }, 100);
    // } else {
    //   this.router.navigateByUrl('/');
    // }
  }

  public clickPlaylistsAndTutorials() {
    // if (this.router.url === '/playlistsAndTutorials') {
    //   this.router.navigateByUrl('/tips-and-tricks');
    //   setTimeout(() => {
    //     this.router.navigateByUrl('/playlistsAndTutorials');
    //   }, 100);
    // } else {
    //   this.router.navigateByUrl('/playlistsAndTutorials');
    // }
  }

  public clickPlaylists() {
    // if (this.router.url === '/playlists') {
    //   this.router.navigateByUrl('/tips-and-tricks');
    //   setTimeout(() => {
    //     this.router.navigateByUrl('/playlists');
    //   }, 100);
    // } else {
    //   this.router.navigateByUrl('/playlists');
    // }
  }

  public clickFurtherFunctions() {
    // if (this.router.url === '/furtherFunctions') {
    //   this.router.navigateByUrl('/tips-and-tricks');
    //   setTimeout(() => {
    //     this.router.navigateByUrl('/furtherFunctions');
    //   }, 100);
    // } else {
    //   this.router.navigateByUrl('/furtherFunctions');
    // }
  }

  public clickFindDanceSchool() {
    // if (this.router.url === '/danceSchools') {
    //   this.router.navigateByUrl('/tips-and-tricks');
    //   setTimeout(() => {
    //     this.router.navigateByUrl('/danceSchools');
    //   }, 100);
    // } else {
    //   this.router.navigateByUrl('/danceSchools');
    // }
  }

  public clickUseAsApp() {
    // if (NavbarComponent.useAsApp()) {
    //   // relax
    // } else {
    //   if (this.router.url !== '/') {
    //     this.router.navigateByUrl('/?useAsApp=true');
    //   } else {
    //     this.myFunction();
    //     this.showUseAsAppDetail.emit();
    //   }
    // }
  }


  public clickTutorials() {
    // if (this.router.url === '/tutorials') {
    //   this.router.navigateByUrl('/tips-and-tricks');
    //   setTimeout(() => {
    //     this.router.navigateByUrl('/tutorials');
    //   }, 100);
    // } else {
    //   this.router.navigateByUrl('/tutorials');
    // }
  }

  public clickNewEvent() {
    // if (this.router.url === '/new-event') {
    //   this.router.navigateByUrl('/tips-and-tricks');
    //   setTimeout(() => {
    //     this.router.navigateByUrl('/new-event');
    //   }, 100);
    // } else {
    //   this.router.navigateByUrl('/new-event');
    // }
  }

  public clickForFree() {
    // if (this.router.url === '/for-free') {
    //   this.router.navigateByUrl('/tips-and-tricks');
    //   setTimeout(() => {
    //     this.router.navigateByUrl('/for-free');
    //   }, 11);
    // } else {
    //   this.router.navigateByUrl('/for-free');
    // }
  }

  public clickFindPAndC() {
    // this.router.navigateByUrl('/partnerAndCommunity');
  }

  public clickCommunity() {
    // if (this.router.url === '/community') {
    //   this.router.navigateByUrl('/tips-and-tricks');
    //   setTimeout(() => {
    //     this.router.navigateByUrl('/community');
    //   }, 11);
    // } else {
    //   this.router.navigateByUrl('/community');
    // }
  }

  public clickAroundTheWorld() {
    // if (this.router.url === '/aroundTheWorld') {
    //   this.router.navigateByUrl('//tips-and-tricks');
    //   setTimeout(() => {
    //     this.router.navigateByUrl('/aroundTheWorld');
    //   }, 11);
    // } else {
    //   this.router.navigateByUrl('/aroundTheWorld');
    // }
  }

  public clickTipsAndTricks() {
    // if (this.router.url === '/tips-and-tricks') {
    //   this.router.navigateByUrl('/community');
    //   setTimeout(() => {
    //     this.router.navigateByUrl('/tips-and-tricks');
    //   }, 11);
    // } else {
    //   this.router.navigateByUrl('/tips-and-tricks');
    // }
  }

  public clickContact() {
    // if (this.router.url === '/contact') {
    //   this.router.navigateByUrl('/tips-and-tricks');
    //   setTimeout(() => {
    //     this.router.navigateByUrl('/contact');
    //   }, 11);
    // } else {
    //   this.router.navigateByUrl('/contact');
    // }
  }

  public clickTitle() {
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    // this.famousCounter++;
    // setTimeout(() => {
    //   if (this.famousCounter === 1) {
    //     this.router.navigateByUrl('/tips-and-tricks');
    //     setTimeout(() => {
    //       this.router.navigateByUrl('/');
    //     }, 2);
    //     this.famousCounter++;
    //   } else if (this.famousCounter === 5) {
    //     this.router.navigateByUrl(`/corrections`);
    //   } else if (this.famousCounter === 4) {
    //     this.router.navigateByUrl(`/admin`);
    //   } else if (this.famousCounter === 3) {
    //     this.router.navigateByUrl(`/supporter`);
    //   }
    // }, 1000);
  }
  public useYourFavoriteLanguage() {
    // this.router.navigateByUrl(`/community-translation`);
  }
}
