import { Component, OnInit } from '@angular/core';
import { LabtestsService } from 'src/app/shared/labtests.service';

@Component({
  selector: 'app-labtest-list',
  templateUrl: './labtest-list.component.html',
  styleUrls: ['./labtest-list.component.scss']
})
export class LabtestListComponent implements OnInit {

  //declare varaible
  page:number=1;
  filter:string;

  constructor(public labtestService:LabtestsService) { }

  ngOnInit(): void {

    this.labtestService.ListOfLabtests();

  }

  //Edit Employee
  updateLabtest(labId : number){
    console.log("Editing : "+labId);
    // navigate to edit form
  }

  deleteLabtest(labId : number){
    console.log("Deleting : "+labId);
    if(confirm(' Are you sure ? ')){
      this.labtestService.deleteLabtest(labId).subscribe(
        response=>{
          this.labtestService.ListOfLabtests();
        },
        error=>{
          console.log(error);
        }
      )
    }
  }

}
