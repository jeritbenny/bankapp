import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    uname:[''],//array
    acno:[''],
    pswd:['']
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
const result=this.ds.register(acno,username,password);
if(result){
  alert('register succesful')
  this.router.navigateByUrl('')
}
else{
  alert('register failed')
  this.router.navigateByUrl('')
}
}
}
