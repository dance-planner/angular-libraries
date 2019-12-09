import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ITypeAheadConfig } from './selection-typeahead.interfaces';

@Component({
  selector: 'lib-selection-typeahead',
  templateUrl: './selection-typeahead.component.html',
  styleUrls: ['./selection-typeahead.component.css']
})
export class SelectionTypeaheadComponent implements OnInit {
  constructor() { }

  @Input() public items: string[] = [];
  @Input() public placeholder = '';
  @Input() public ngStyle = this.getStyling();
  @Input() public typeAheadConfig: ITypeAheadConfig = this.getTypeAheadConfig();
  @Output() setValue = new EventEmitter<string>();

  public selectedItem = '';
  getTypeAheadConfig(): ITypeAheadConfig {
    return {
      debounceTimeInMilliSeconds: 200,
      showAfterXLetters: 3,
      maxAmountOfDisplayedItems: 10
    };
  }

  ngOnInit() {
  }

  public searchItem = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(this.typeAheadConfig.debounceTimeInMilliSeconds),
      distinctUntilChanged(),
      map(term => term.length < this.typeAheadConfig.showAfterXLetters ?
        []
        : this.items.filter((v: any) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
          .slice(0, this.typeAheadConfig.maxAmountOfDisplayedItems))
    )

  public clearItemField() {
    this.selectedItem = '';
  }

  public handleItemSelected(event?: any) {
    if (event !== undefined) {
      this.selectedItem = event.item;
      this.setValue.emit(this.selectedItem);
    }
  }

  public getStyling(): any {
    return {
      'background-color': 'black',
      color: 'white'
    };
  }
}
