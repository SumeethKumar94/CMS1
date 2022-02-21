import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LabreportService } from 'src/app/shared/labreport.service';


@Component({
  selector: 'app-labreportform',
  templateUrl: './labreportform.component.html',
  styleUrls: ['./labreportform.component.scss']
})
export class LabreportformComponent implements OnInit {
 
  //declare variable
  ReportId:number=0;
  page:number=1;
  filter:string;

  constructor(public labreportService:LabreportService,
    private route :ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.ReportId = this.route.snapshot.params['ReportId']
    //get appointment  by id for update
    this.labreportService.LabReportById(this.ReportId)
  }
getTestById(TestId:number){
    console.log("lab test corresponding to the id : "+TestId);
    // navigate to edit form
    this.router.navigate(['updatereport',TestId])

}}
