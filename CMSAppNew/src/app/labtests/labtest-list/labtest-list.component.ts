import { Component, OnInit } from '@angular/core';
import { LabtestsService } from 'src/app/shared/labtests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labtest-list',
  templateUrl: './labtest-list.component.html',
  styleUrls: ['./labtest-list.component.scss']
})
export class LabtestListComponent implements OnInit {

  //declare varaible
  page:number=1;
  filter:string;

  constructor(
    public labtestService : LabtestsService,
    private router : Router
    ) { }

  ngOnInit(): void {

    this.labtestService.ListOfLabtests();

  }

  addLabtest(){
    this.router.navigate(['labtest']);
  }

  //Edit 
  updateLabtest(labId : number){
    console.log("Editing : "+labId);
    // navigate to edit form
    this.router.navigate(['labtest',labId])
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
