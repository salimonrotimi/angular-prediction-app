import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  serverMessage!: string;
  myform!: FormGroup;

  // dependency injection
  constructor(private fb: FormBuilder, private service: ProjectService, private router: Router, private localStoreService: LocalStorageService) { }

  ngOnInit(): void {

    this.myform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(){
    var logindata = {
      email: this.myform.value.email,
      password:  this.myform.value.password
    }
    this.service.addLogin(logindata).subscribe((res) =>{
      this.serverMessage = res;

      if(this.serverMessage == "Success"){
        alert("Login Successful.");
        this.service.isAuthenticated = true;    // this helps to activate the authenticator guard
        this.service.isUserAuthenticated = true;  // this helps to activate the user authenticator guard
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
