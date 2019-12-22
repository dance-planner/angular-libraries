import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-ng-simple-typeahead',
  templateUrl: './ng-simple-typeahead.component.html',
  styleUrls: ['./ng-simple-typeahead.component.css']
})
export class NgSimpleTypeaheadComponent  {
  @Input() placeHolder = 'Start Typing...';
  @Input() items: string[];
  @Input() selectedItem = 'Bachata';
  @Output() itemSelected = new EventEmitter<string>();


  public onInputClicked() {
    this.selectedItem = '';
  }
  public onItemSelected(item: string) {
    this.itemSelected.emit(item);
  }
}

