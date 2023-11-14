import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ErrorsService{

  errors!:any[];

  constructor(private http: HttpClient){}
    
  getErrors(){
    return this.errors;
  }
    
  getError(errorNumber:number){
    return this.errors.find(errors => errors.errorNumber == errorNumber);
  }

  getErrorsAPI(){
    const headers = {
      'Access-Control-Allow-Origin': '*'
    };

    this.http.get<any>('http://epayroll-data-eda-epayroll-poc.apps.ocp4.omega.dce-eir.net/errors', {headers}).subscribe({
      next: data => {
        this.errors = data;
      },
      error: error => {
        console.error("Error here: ", error);
      }
    })
  }
  
}