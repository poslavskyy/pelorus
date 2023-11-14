import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EmployerService{

    employers!: any[];

    constructor(private http: HttpClient){}
    
    getEmployers(){
      return this.employers;
    }

    getEmployerRecord(recordID:number){
      return this.employers.find(employers => employers.recordID == recordID);
    }

    getEmployersAPI(){
      const headers = {
        'Access-Control-Allow-Origin': '*'
      };

      this.http.get<any>('https://mocki.io/v1/ea7f92f3-46df-4011-9523-0b73e094009a', {headers}).subscribe({
        next: data => {
          this.employers = data;
        },
        error: error => {
          console.error("Error here: ", error);
        }
      })
    }
}
