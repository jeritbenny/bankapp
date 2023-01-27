import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //deposite properties
    acno="";
    pswd="";
    amount="";
    //withdraw properties
    acno1="";
    pswd1="";
    amount1="";

 

    //current user- to get name when logging in
user="";
//system date
sdate:any;

 //deposite model 
 depositeForm=this.fb.group({//group
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]//array

})
//withdraw model
withdrawForm=this.fb.group({//group
  acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]//array

})

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { 
    if(localStorage.getItem("currentUser")){
      this.user=JSON.parse(localStorage.getItem("currentUser")||'');
    }
    // this.user=this.ds.currentUser;
   // this.user=JSON.parse(localStorage.getItem('currentUser')||'');
    this.sdate = new Date()
  }

  ngOnInit(): void {
    if(!localStorage.getItem('currentUser')){
      alert('please login first')
      this.router.navigateByUrl('');
    }
    
  }
 
deposit(){
  var acno = this.depositeForm.value.acno;
  var pswd = this.depositeForm.value.pswd;
  var amount = this.depositeForm.value.amount;
  if(this.depositeForm.valid){
   this.ds.deposit(acno,pswd,amount)
   .subscribe((result:any)=>{
    alert(result.message)
   },
   result=>{
    alert(result.error.message)
   }
   )
 
}
}
withdraw(){
  var acno = this.withdrawForm.value.acno1;
  var pswd = this.withdrawForm.value.pswd1;
  var amount = this.withdrawForm.value.amount1;
  if(this.withdrawForm.valid){
    this.ds.withdraw(acno,pswd,amount)
    .subscribe((result:any)=>{
     alert(result.message)
    },
    result=>{
     alert(result.error.message)
    }
    )
 }
}
logout(){
  //remove username and acno
  localStorage.removeItem('currentAcno')
  localStorage.removeItem('currentUser')
  localStorage.removeItem('token')

  this.router.navigateByUrl('')
}
delete(){
  this.acno=JSON.parse(localStorage.getItem('currentAcno')|| '')

}
onCancel(){
  this.acno="";
}
onDelete(event:any){
 // alert(event)
 this.ds.deleteAcc(event)
 .subscribe((result:any)=>{
  alert(result.message)
 // this.router.navigateByUrl('');
    this.logout();
 },
 result=>{
  alert(result.error.message)
 }
 )
}
}
