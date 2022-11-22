import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your perfect banking panter";

  account="enter the acc_no";
  acno=''
  pswd=''

  userDetails:any={
   1001:{acno:1001,username:"jerry",password:1000,balance:1000},
   1002:{acno:1002,username:"jerit",password:1001,balance:1000},
   1003:{acno:1003,username:"jerin",password:1002,balance:1000}

  }

  constructor() { }

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

  login(a:any,p:any){
    //alert("login clicked");
    var acno=a.value;
    var pswd=p.value;
    var userDetails=this.userDetails;
    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert("login sussessful");
      }
      else{
        alert('invalid password');
      }
    }
    else{
      alert('Invalid user details');
    }
  }

}
