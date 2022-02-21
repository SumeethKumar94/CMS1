import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TestsService } from 'src/app/shared/tests.service';

@Component({
  selector: 'app-updatereport',
  templateUrl: './updatereport.component.html',
  styleUrls: ['./updatereport.component.scss']
})
export class UpdatereportComponent implements OnInit {

  TestId : number=0;

  constructor(public testsService : TestsService,
    private route : ActivatedRoute ,
    private router:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    
    //get Id
    this.TestId = this.route.snapshot.params['TestId'];

   // getById
    if(this.TestId!=0 || this.TestId != null){
      this.testsService.getTestById(this.TestId).subscribe(
        result =>{
          console.log(result);
          

          //asign this result to empService formData
          this.testsService.formData = Object.assign({},result);
        },
        error =>{
          console.log(error);
        }
      );
    }
  }
  //submit form 
  onSubmit(form : NgForm){
    console.log(form.value);
    let addId = this.testsService.formData.TestId;

   
      this.updateTestById(form);
  }



  //Update Method
  updateTestById(form?:NgForm){
    console.log("Updating record...");
    this.testsService.updateTestById(form.value).subscribe(
      result =>{
        console.log(result);
        //ca;;ing reset form for clear the contents
        this.resetForm(form);
        this.toastr.success('test has been updated','CMS v2022')
      },
      error =>{
        console.log(error);
      }
    );
  }

  //clear all contents after submit  
  resetForm(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
  }}

