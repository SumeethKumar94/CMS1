import { Component, OnInit } from '@angular/core';
import {LabreportService} from 'src/app/shared/labreport.service'
import { LabtestsService } from 'src/app/shared/labtests.service';

@Component({
  selector: 'app-labreport',
  templateUrl: './labreport.component.html',
  styleUrls: ['./labreport.component.scss']
})
export class LabreportComponent implements OnInit {
  toastrService: any;

  constructor(
    public lrservice: LabreportService,
    public labtestService : LabtestsService
    ) { }

  ngOnInit(): void {
    console.log("generate report");
    this.lrservice. bindListLabReport();

  }

}
