import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  serverMessage!: string;
  myform!: FormGroup;
  constructor(private fb: FormBuilder, private service: ProjectService) { }

  ngOnInit(): void {

    this.myform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confpassword: ['', [Validators.required]],
    },
    {
      validators: this.pwdmatch('password', 'confpassword')
    }
    );
 }

 pwdmatch(pwd: any, confpwd: any){
    return (formgrp: FormGroup) => {

      const pwdcontrol = formgrp.controls[pwd];
      const confpwdcontrol = formgrp.controls[confpwd]

      if(pwdcontrol.errors && !confpwdcontrol.errors!['mustmatch']){
        return;
      }

      if(pwdcontrol.value !== confpwdcontrol.value){
        confpwdcontrol.setErrors({mustmatch: true})
      }
      else{
        confpwdcontrol.setErrors(null);
      }
    }
 }

  slideImages = [
    {
      imageSrc: 'assets/agro.png',
      imageAlt: 'agro'
    },
    {
      imageSrc: 'assets/agro2.png',
      imageAlt: 'agro 2'
    },
    {
      imageSrc: 'assets/agro3.jpg',
      imageAlt: 'agro 3'
    },
    {
      imageSrc: 'assets/agro4.jpg',
      imageAlt: 'agro 4'
    },
    {
      imageSrc: 'assets/agro5.jpg',
      imageAlt: 'agro 5'
    },
    {
      imageSrc: 'assets/agro6.jpg',
      imageAlt: 'agro 6'
    },
    {
      imageSrc: 'assets/agro7.jpg',
      imageAlt: 'agro 7'
    },
    {
      imageSrc: 'assets/agro8.jpg',
      imageAlt: 'agro 8'
    },
    {
      imageSrc: 'assets/agro9.jpg',
      imageAlt: 'agro 9'
    },
  ];

  onSubmit(){
    var logindata = {
      email: this.myform.value.email,
      password:  this.myform.value.password
    }
    this.service.updatePassword(logindata).subscribe((res) =>{
      this.serverMessage = res;

      if(this.serverMessage == "Success"){
        alert("Password changed successfully.");
        this.myform.reset();
        return;
      }
      else{
        alert("Password change failed. No record found for the entered email. Please try again.");
        this.myform.reset();
        return;
      }
    });
 }

}
