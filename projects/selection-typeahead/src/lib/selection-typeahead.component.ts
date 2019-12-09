import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'lib-selection-typeahead',
  templateUrl: './selection-typeahead.component.html',
  styleUrls: ['./selection-typeahead.component.css']
})
export class SelectionTypeaheadComponent implements OnInit {

  @Input() public items: string[] = [];
  @Input() public placeholder = '';
  @Input() public ngStyle = this.getStyling();
  public selectedItem = '';
  constructor() { }

  ngOnInit() {
  }

  public searchItem = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ?
        []
        : this.items.filter((v: any) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  public clearItemField() {
    this.selectedItem = '';
  }

  public handleItemSelected(event?: any) {
    if (event !== undefined) {
      this.selectedItem = event.item;
    }
  }

  public getStyling(): any {
    return {
      'background-color': 'black',
      color: 'white'
    };
  }
}
