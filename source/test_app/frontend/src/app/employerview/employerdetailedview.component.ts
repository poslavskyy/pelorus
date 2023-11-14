import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EmployerService } from "./employerview.service";


@Component({
    templateUrl: './employerdetailedview.component.html',
})

export class EmployerDetailedViewComponent implements OnInit {

    employer!: any;

    constructor(private employerService: EmployerService, private activatedRoute: ActivatedRoute) {
        
    }

    ngOnInit(): void{
        this.employer = this.employerService.getEmployerRecord(this.activatedRoute.snapshot.params['recordID']);
    }
}