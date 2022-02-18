import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Staff } from 'src/app/shared/staff';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables 
  loginForm! : FormGroup;
  isSubmitted = false;
  errors = '';
  loginUser : any = new Staff();
  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authservice: AuthService) { }

  ngOnInit(): void {

    //create a reactive form model
    this.loginForm = this.formBuilder.group(
      {
        //formControl fields
        StaffName : ['',[Validators.required]],
        StaffPassword : ['',[Validators.required]]
      }
    );
  }

  //get control for validation 
  get formControls(){
    return this.loginForm.controls;
  }

  //login verify for credentials
  loginCredentials(){

    this.isSubmitted = true;
    console.log("Submitted form for credentials");

    if(this.loginForm.valid){
      console.log("with Valid")
      this.errors = '';
      //calling method from auth service --authentication and autherize
      this.authservice.loginVerify(this.loginForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.loginUser = data;
          //check the role based on  role RoleId, it redirect to the respective component
          sessionStorage.setItem("jwtToken",this.loginUser.token)
          
          if(this.loginUser.RoleId === 5){
            
            console.log("Admin");
            localStorage.setItem("UserName",this.loginUser.Name);
            localStorage.setItem("ACESSROLE",this.loginUser.RoleId);
            sessionStorage.setItem("USERNAME",this.loginUser.Name);
            this.router.navigateByUrl('/admin');
          }
          else if(this.loginUser.RoleId === 2){
            console.log("Doctor");
            localStorage.setItem("UserName",this.loginUser.Name);
            localStorage.setItem("ACESSROLE",this.loginUser.RoleId);
            sessionStorage.setItem("USERNAME",this.loginUser.Name);
            this.router.navigateByUrl('/doctor');
          }
          else if(this.loginUser.RoleId === 4){
            console.log("pharmacist");
            localStorage.setItem("UserName",this.loginUser.Name);
            localStorage.setItem("ACESSROLE",this.loginUser.RoleId);
            sessionStorage.setItem("USERNAME",this.loginUser.Name);
            this.router.navigateByUrl('/pharmacist');
          }
         
          else if(this.loginUser.RoleId === 3){
            console.log("labtechnician");
            localStorage.setItem("UserName",this.loginUser.Name);
            localStorage.setItem("ACESSROLE",this.loginUser.RoleId);
            sessionStorage.setItem("USERNAME",this.loginUser.Name);
            this.router.navigateByUrl('/labtechnician');
          }
          else if(this.loginUser.RoleId === 1){
            console.log("receptionist");
            localStorage.setItem("UserName",this.loginUser.Name);
            localStorage.setItem("ACESSROLE",this.loginUser.RoleId);
            sessionStorage.setItem("USERNAME",this.loginUser.Name);
            this.router.navigateByUrl('/receptionist');
          }
         
          else{
            this.errors ="Sorry! NOT Authenticate/authorize to access this module";
          }
        },
        error =>{
          this.errors ="invalid username and password, try again" 
        }
      );

    }

    if(this.loginForm.invalid){
      console.log("Is Invalid");
      return;
    }
  
}
}