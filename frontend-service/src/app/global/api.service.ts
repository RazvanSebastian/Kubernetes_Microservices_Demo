import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly ENTITIES_PATH = "/api/entities";
  private readonly INFO_PATH = "/api/jvm-info";

  constructor(private httpClient: HttpClient) { }

  public getManagementInfoHtmlContent(): Observable<string> {
    return this.httpClient.get(this.INFO_PATH, { responseType: "text" });
  }

  public saveItem(itemMode: ItemModel): Observable<ItemModel> {
    return this.httpClient.post<ItemModel>(this.ENTITIES_PATH, itemMode);
  }

  public getItems(): Observable<ItemModel[]> {
    return this.httpClient.get<ItemModel[]>(this.ENTITIES_PATH);
  }
}
