import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getManagementInfoHtmlContent(): Observable<string> {
    return this.httpClient.get("/api/jvm-info", { responseType: "text" });
  }

  public saveItem(itemMode: ItemModel): Observable<ItemModel> {
    return this.httpClient.post<ItemModel>("/api", itemMode);
  }

  public getItems(): Observable<ItemModel[]> {
    return this.httpClient.get<ItemModel[]>("/api");
  }
}
