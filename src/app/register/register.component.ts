import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  acno="";
  pswd="";
  uname="";
  //register model 
  registerForm=this.fb.group({//group
    uname:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],//array
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-z A-Z 0-9]*')]]
  })
  //control - ts file link to html file
  
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
register(){
 //alert("clicked")
 console.log(this.registerForm);//value
  
 
var username=this.registerForm.value.uname;
var password=this.registerForm.value.pswd;
var acno=this.registerForm.value.acno;
if(this.registerForm.valid){
 // console.log(this.registerForm.get('uname')?.errors);
  
  this.ds.register(acno,username,password)
  .subscribe((result:any)=>{
       alert(result.message);
       this.router.navigateByUrl('')
  },
  result=>{
    alert(result.error.message)
  }
  )}
}
}
