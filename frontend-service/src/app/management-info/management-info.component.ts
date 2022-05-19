import { Component, OnInit } from '@angular/core';
import { ApiService } from '../global/api.service';

@Component({
  selector: 'app-management-info',
  templateUrl: './management-info.component.html',
  styleUrls: ['./management-info.component.css']
})
export class ManagementInfoComponent implements OnInit {

  htmlContent: string = "";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getManagementInfoHtmlContent().subscribe((content: string) => this.htmlContent = content);
  }

}
