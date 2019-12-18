import { Component, OnInit, Input } from '@angular/core';
import { NgQAndAService } from './ng-q-and-a.service';

export interface IQAPair {
  question: string;
  answer: string;
}

@Component({
  selector: 'lib-ng-q-and-a',
  templateUrl: './ng-q-and-a.component.html'
})
export class NgQAndAComponent implements OnInit {

  @Input() persistencyURLForGetRequest;
  @Input() persistencyURLForAddRequest;
  @Input() persistencyURLForUpdateRequest;

  public mode = '';
  public assetId = '';
  public showDataInJSONFormat = false;
  public qaPair: IQAPair = {
    question: '',
    answer: ''
  };

  public qaPairCollection: IQAPair[] = [];
  public qaPairCollectionAsString = '';


  constructor(private service: NgQAndAService) { }

  ngOnInit() {
  }

  public clickGenerateXWordPuzzle() {
    alert('hallo');
  }

  public clickAdd() {
    this.qaPairCollection.push(this.qaPair);
    this.qaPairCollectionAsString = JSON.stringify(this.qaPairCollection);
    this.qaPair = {
      question: '',
      answer: ''
    };
  }

  public loadAsset(id: string) {
    const urlToLoadData = `${this.persistencyURLForGetRequest}/${id}`;
    this.service.get(urlToLoadData)
      .subscribe((result) =>  {
        this.qaPairCollection = result;
        this.mode = 'edit';
      });
  }

  public clickSave() {
    if (this.assetId === '') {
      this.service.post(this.persistencyURLForAddRequest, this.qaPairCollection)
      .subscribe((result) => this.assetId = result.randomAssetId);
    } else {
      const urlToUpdateData = `${this.persistencyURLForUpdateRequest}/${this.assetId}`;
      this.service.post(urlToUpdateData, this.qaPairCollection)
      .subscribe((result) => this.assetId = result.randomAssetId);
    }
  }

  public clickLoadQAndAPairs() {
    this.mode = 'Load';
  }

  public clickAddQAndAPairs() {
    this.mode = 'Add';
  }

  public clickShowDataInJSONFormat() {
    this.showDataInJSONFormat = !this.showDataInJSONFormat;
  }


}
