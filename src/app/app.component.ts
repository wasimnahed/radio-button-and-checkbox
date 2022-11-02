import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import{User} from  './User'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Angular ';
  user=new User();     // object banalom use korar jonno 

  constructor() { }

  OnFormSubmit(form:NgForm){
    if(form.invalid){
  return;
    }
    console.log('User name:'+ form.controls['uname'].value);
    console.log('Gender:'+ form.controls['gender'].value);
    console.log('Married ?:'+ form.controls['married'].value);
    console.log('T & C:'+ form.controls['tc'].value);
  }

  resetForm(form:NgForm){
     this.user=new User();
     form.resetForm({
      married:false
     });
  }
  setDefaultValue(){
    this.user.username="wasim";
    this.user.gender='male';
    this.user.isMarried=false;
    this.user.isTCAccepted=true;
  }

}
