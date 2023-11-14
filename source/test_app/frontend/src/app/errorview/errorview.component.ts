import { Component, OnInit } from '@angular/core';
import { ErrorsService } from './errorview.service';

@Component({
  templateUrl: './errorview.component.html',
  styleUrls: ['./errorview.component.css']
})
export class ErrorViewComponent implements OnInit {

  errors!:any[];

  constructor(private errorService: ErrorsService) {
    
  }
 
  ngOnInit(): void {
    this.errorService.getErrorsAPI();
    this.errors = this.errorService.getErrors();
  }


}
