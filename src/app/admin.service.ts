import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API='http://localhost:8081';
  public registerAdmin(adminData:any){
    return this.http.post(this.API+'/registerAdmin', adminData);
  }

  public getAdmins(){
    return this.http.get(this.API+'/getAdmins');
  }

  public deleteAdmin(id:any){
    return this.http.delete(this.API+'/deleteAdmin?id='+id);
  }

  public updateAdmin(admin:any){
    return this.http.put(this.API+'/updateAdmins',admin);
  }
  constructor(private http:HttpClient) { }
}
