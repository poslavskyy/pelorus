import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployerService } from "./employerview.service";

@Component({
  templateUrl: './employerview.component.html',
  styleUrls: ['./employerview.component.css']
})
export class EmployerviewComponent implements OnInit {

  employers!: any[]
  
  constructor(private employerService: EmployerService) { }

  ngOnInit(): void {
    this.employerService.getEmployersAPI();
    this.employers = this.employerService.getEmployers();
  }

}
