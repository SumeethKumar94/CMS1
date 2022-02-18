import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PharmacybillService } from 'src/app/shared/pharmacybill.service';

@Component({
  selector: 'app-pharmacybillprinting',
  templateUrl: './pharmacybillprinting.component.html',
  styleUrls: ['./pharmacybillprinting.component.scss']
})
export class PharmacybillprintingComponent implements OnInit {

  constructor(public pharmacybillService : PharmacybillService,
    private router : Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}
