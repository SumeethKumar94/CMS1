import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MedicineService } from 'src/app/shared/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {

  //declare variable 
  MedInvId : number=0;

  constructor(public medicineService : MedicineService,
    private route : ActivatedRoute ,
    private router:Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    // get roles
    // this.medicineService.bindListDepartment();

    //get Id
    this.MedInvId = this.route.snapshot.params['MedInvId'];

   // getStaffById
    if(this.MedInvId!=0 || this.MedInvId != null){
      this.medicineService.getMedicinefById(this.MedInvId).subscribe(
        result =>{
          console.log(result);
          

          //asign this result to empService formData
          this.medicineService.formData = Object.assign({},result);
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
    let addId = this.medicineService.formData.MedInvId;

    //insert or update
    if(addId == 0 || addId == null){
      //insert 
      this.insertMedicineRecord(form);
    }
    else{
      this.updateMedicineRecord(form);
    }
  }

 
  insertMedicineRecord(form?:NgForm){
    console.log("Inserting a record...");
    this.medicineService.insertMedicine(form.value).subscribe(
      result =>{
        console.log(result);
        //calling reset form for clear the contents
        this.resetForm(form);
        this.toastr.success(' New Medicine Record has been inserted','CMS v2022');
      },
      error =>{
        console.log(error);
      }
    );
  }

  //Update Method
  updateMedicineRecord(form?:NgForm){
    console.log("Updating record...");
    this.medicineService.updateMedicine(form.value).subscribe(
      result =>{
        console.log(result);
        //ca;;ing reset form for clear the contents
        this.resetForm(form);
        this.toastr.success('Medicine Inventory has been inserted','CMS v2022')
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
  }
}
