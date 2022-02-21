import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LabreportService} from 'src/app/shared/labreport.service'
import { LabtestsService } from 'src/app/shared/labtests.service';

@Component({
  selector: 'app-labreport',
  templateUrl: './labreport.component.html',
  styleUrls: ['./labreport.component.scss']
})
export class LabreportComponent implements OnInit {
  toastrService: any;
  filter:string;

  constructor(
    public router:Router,
    public lrservice: LabreportService,
    public labtestService : LabtestsService
    ) { }

  ngOnInit(): void {
    console.log("generate report");
    this.lrservice. bindListLabReport();

  }
  LabReportById(ReportId:number){
    console.log("lab report corresponding to the id : "+ReportId);
    // navigate to edit form
    this.router.navigate(['labreportform',ReportId])

}
}
