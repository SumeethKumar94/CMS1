import { Component } from '@angular/core';
import { StaffService } from './shared/staff.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  filter: string;
  constructor(public staffService : StaffService) { }
}
