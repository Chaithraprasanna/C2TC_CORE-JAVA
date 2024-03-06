import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from './admin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-module';
  adminDetails=null as any;

  constructor(private adminService: AdminService){
    this.getAdminDetails()
  }

  register(registerForm:NgForm){
    this.adminService.registerAdmin(registerForm.value).subscribe(
      (resp)=>{
      console.log(resp);
      registerForm.reset();
      this.getAdminDetails();
    },(err)=>{
      console.log(err);
    }
    );
  }

  getAdminDetails(){
    this.adminService.getAdmins().subscribe(
      (resp)=>{
        console.log(resp);
        this.adminDetails=resp;
      },(err)=>{
        console.log(err);
      }
    );
  }

  deleteAdmin(admin:any){
    this.adminService.deleteAdmin(admin.id).subscribe(
      (resp)=>{
        console.log(resp);

      },(err)=>{
        console.log(err);
      }
    );
  }

  adminToUpdate={
    id:"",
    name:"",
    password:""
  }

  edit(admin:any){
    this.adminToUpdate=admin;
  }

  updateAdmin(){
    this.adminService.updateAdmin(this.adminToUpdate).subscribe(
      (resp)=>{
        console.log(resp);

      },(err)=>{
        console.log(err);
      }
    );
     
  }

  }

