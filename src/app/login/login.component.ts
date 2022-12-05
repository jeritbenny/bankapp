import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking panter";

  account="enter the acc_no";
  acno='';
  pswd='';

  

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  
  acnoChange(event:any){
    console.log(event);

    this.acno=event.target.value;
    console.log(this.acno);
    
  }
  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }

  // login(a:any,p:any){
  //   //alert("login clicked");
  //   var acno=a.value;
  //   var pswd=p.value;
  //   var userDetails=this.userDetails;
  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert("login sussessful");
  //     }
  //     else{
  //       alert('invalid password');
  //     }
  //   }
  //   else{
  //     alert('Invalid user details');
  //   }
  // }
  login(){
    //alert("login clicked");
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.ds.userDetails;
    const result=this.ds.login(acno,pswd)
    if(result){
      alert("login sussessful");
      this.router.navigateByUrl('dashboard');
    }
    else{
      alert('login failed');
    }

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
      
  //     }
  //     else{
       
  //     }
  //   }
  //   else{
  //     alert('Invalid user details');
  //   }
   }

}
