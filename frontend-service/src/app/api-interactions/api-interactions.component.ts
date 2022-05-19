import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ApiService } from '../global/api.service';
import { ItemModel } from '../global/models';

@Component({
  selector: 'app-api-interactions',
  templateUrl: './api-interactions.component.html',
  styleUrls: ['./api-interactions.component.css']
})
export class ApiInteractionsComponent implements OnInit {

  inputValue: string = ""
  items: ItemModel[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getItems().subscribe(items => this.items = items);
  }

  onSaveItem() {
    const newItem = { value: this.inputValue } as ItemModel;
    this.saveItemModel(newItem);
  }

  private saveItemModel(itemModel: ItemModel) {
    this.apiService.saveItem(itemModel)
      .pipe(
        switchMap(() => this.apiService.getItems())
      )
      .subscribe(items => {
        this.items = items
        this.inputValue = "";
      });
  }

}
