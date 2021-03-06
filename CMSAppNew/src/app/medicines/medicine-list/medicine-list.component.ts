import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MedicineService } from 'src/app/shared/medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})
export class MedicineListComponent implements OnInit {

  //declare variable
  page:number=1;
  filter:string;

  constructor(public medicineService:MedicineService,private router : Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log("WELCOME TO LIFE CYCLE HOOK");
    //this.getMedicines();
    this.medicineService.bindListMedicines();

  }
  addMedicine(){
    this.router.navigate(['medicine']);
  }

   //Update Medicine
   updateMedicine(MedInvId :number){
    console.log(MedInvId );
    this.router.navigate(['medicine',MedInvId ])
    }

   //delete Medicine
   deleteMedicine(MedInvId :number){
    if(confirm('Are you sure, you want to DELETE this record')){
       this.medicineService.deleteMedicine(MedInvId).subscribe(
        response =>{
        this.medicineService.bindListMedicines();
        },
        error=>{
        console.log(error);
         }
       );
   } };

   






















  //1
  // getMedicines(){
  
  //   //call service method
  //   this.medicineService.getAllMedicines().subscribe(
  //     response =>{
     
  //       console.log('retrieving from list');
  //       console.log(response);
  //     },
  //     error=>{
  //       console.log('something wrong');
  //       console.log(error);
  //     }
  //   );
  // }


}
