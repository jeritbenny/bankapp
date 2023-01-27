import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your perfect banking partner";

  account="Enter Account Number";
  acno='';
  pswd='';

   //login model 
   loginForm=this.fb.group({//group
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-z A-Z 0-9]*')]]
  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

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
  login() {
    // alert('login clicked')
 
    // var userDetails = this.ds.userDetails;

    if (this.loginForm.valid) {
      var acno = this.loginForm.value.acno;
      var pswd = this.loginForm.value.pswd;
      this.ds.login(acno, pswd)
      .subscribe((result:any)=>{
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser));
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno));
        localStorage.setItem('token',JSON.stringify(result.token));
        alert(result.message);
        this.router.navigateByUrl('dashboard');
      },
      result =>{
        alert('result.error.message')
      }
      )
     
    }

//     else {
//       alert('invalid form')

//     }
  }
}