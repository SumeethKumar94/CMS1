import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medicine } from 'src/app/shared/medicine';
import { PharmacybillService } from 'src/app/shared/pharmacybill.service';

@Component({
  selector: 'app-pharmacybillprinting',
  templateUrl: './pharmacybillprinting.component.html',
  styleUrls: ['./pharmacybillprinting.component.scss']
})
export class PharmacybillprintingComponent implements OnInit {
  
  medicine_Bill_Id : number;

  constructor(public pharmacybillService : PharmacybillService,
    private route : ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.medicine_Bill_Id = this.route.snapshot.params['Medicine_Bill_Id'];

    this.pharmacybillService.bindListPharmacyBillPrint(this.medicine_Bill_Id);
    this.onSubmit()
    
  }
  //submit form 
  onSubmit(){
    var GrandTotal : any;
    var gg : number = 0;
    for (const emp of this.pharmacybillService.pharmbillprint) {
      for(const tsr of emp.Medicine){
        
        var gg = gg+ tsr.Total
         
      }
      
    }
    let str  = (<HTMLInputElement>document.getElementById('total'));
    (<HTMLInputElement>document.getElementById('gtotal')).value = gg.toString();
  }


}
