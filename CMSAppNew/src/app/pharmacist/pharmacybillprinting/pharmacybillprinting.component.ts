import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medicine } from 'src/app/shared/medicine';
import { PharmacybillService } from 'src/app/shared/pharmacybill.service';
import jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 

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

  Screen(){
    var data = document.getElementById('page');
    html2canvas(data).then(
      canvas =>{
        var imgWidth = 200;
        var pageHeight = 290;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;

        const contentDataUrl = canvas.toDataURL('image/png')
        let pdf = new jspdf('p','mm','a4');
        var position = 0;
        pdf.addImage(contentDataUrl,'PNG',0,position,imgWidth,imgHeight)
        for (const emp of this.pharmacybillService.pharmbillprint) {
          
          pdf.save(emp.PatientName +'Bill')
        }

      }
    )
  }

}
