import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-investor-login',
  templateUrl: './investor-login.component.html',
  styleUrls: ['./investor-login.component.css']
})
export class InvestorLoginComponent implements OnInit {

  serverMessage!: string;
  myform!: FormGroup;
  constructor(private fb: FormBuilder, private service: ProjectService, private router: Router, private localStoreService: LocalStorageService) { }

  ngOnInit(): void {

    this.myform = this.fb.group({
      investoremail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
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
      investoremail: this.myform.value.investoremail,
      password:  this.myform.value.password
    }
    this.service.addInvestorLogin(logindata).subscribe((res) =>{
      this.serverMessage = res;

      if(this.serverMessage == "Success"){
        alert("Login Successful");
        this.service.isAuthenticated = true;
        this.service.isInvestorAuthenticated = true;
        this.router.navigate(["/home"]);
      }

      else{
        if(this.serverMessage == "Failure"){
          alert("Invalid email or password. Please try again.");
        }
        else{
          alert("Internal server error. An error occurred during login.")
        }
      }
    });

  }
}
