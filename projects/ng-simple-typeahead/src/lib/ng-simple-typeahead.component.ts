import { Component, Input, Output, EventEmitter } from '@angular/core';

export const delimiter = ' |fance#< ';

@Component({
  selector: 'lib-ng-simple-typeahead',
  templateUrl: './ng-simple-typeahead.component.html',
  styleUrls: ['./ng-simple-typeahead.component.css']
})
export class NgSimpleTypeaheadComponent  {
  @Input() placeHolder;
  @Input() useCustomTemplate: boolean;
  @Input() items: string[];
  @Input() selectedItem;
  @Input() maxNumberOfProposals;
  @Input() inputStyle;

  @Output() itemSelected = new EventEmitter<string>();

  public getImageUrl(item: string): string {
    if (item.indexOf(delimiter) !== -1) {
      const imgUrl = item.split(delimiter)[1];
      return `${imgUrl}`;
    }
    return 'https://fance-stiftung.de/api/app/app-images/logo.png';
  }

  public getThePureString(item: string): string {
    if (item.indexOf(delimiter) !== -1) {
      return item.split(delimiter)[0];
    }
    return item;
  }

  public onInputClicked() {
    this.selectedItem = '';
  }
  public onItemSelected(item: any) {
    let selectedString: string;
    if (typeof(item) === 'string') {
      selectedString = item;
      this.itemSelected.emit(selectedString);
    } else {
      selectedString = item.item.split(delimiter)[0];
      this.itemSelected.emit(item.item);
    }
    this.selectedItem = selectedString;
  }
}

