import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  serverMessage!: string;
  id = 0;
  myform!: FormGroup;
  filteredNations!: Observable<string[]>;

  constructor(private fb: FormBuilder, private service: ProjectService, private router: Router) {}

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

  africanNations : string[] = ['Algeria','Angola','Benin','Botswana','Burkina Faso','Burundi',
  'Cameroun','Canary Island','Cape Verde','Central African Republic','Ceuta','Chad','Comoros',
  'Congo Democratic Republic','Congo Republic','Cote d\'Ivoire','Egypt','Equatorial Guinea',
  'Eritrea','Ethiopia','French Southern Territories','Gabon','Gambia','Ghana','Guinea',
  'Guinea-Bissau','Kenya','Lesotho','Liberia','Libya','Madagascar','Madeira','Malawi','Mali',
  'Mauritania','Mauritius','Mayotte','Melilla','Morocco','Mozambique','Namibia','Niger','Nigeria',
  'Reunion','Rwanda','Saint Helena, Ascension and Tristan da Cunha','Sao Tome and Principe',
  'Senegal','Seychelles','Sierra Leone','Somalia','South Africa','South Sudan','Sudan',
  'Swaziland','Tanzania','Togo','Tunisia','Uganda','Western Sahara','Zambia','Zimbabwe'];

  ngOnInit(): void {

    this.myform = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.required]],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      checkbx: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confpassword: ['', [Validators.required]],
    },
    {
      validators: this.pwdmatch('password', 'confpassword')
    }
    );

    // this works with the countries auto-complete template
    this.filteredNations = this.myform.controls['country'].valueChanges.pipe(
     startWith(''),
     map(value => this.filterCountry(value))
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


  // this defines the filter() function that is used in the map() function
  private filterCountry(value: string): string[]  {
    const filteredValue = value.toLowerCase();
    // this filters the "africanNations" array declared above, loads the result into "nat",
    // converts it to lower case using inputed "value" (i.e. filteredValue) from the input field
    return this.africanNations.filter(nat => nat.toLowerCase().includes(filteredValue));
  }


  onSubmit(){
    var regdata = {
      id: this.id,
      firstName: this.myform.value.firstname,
      lastName: this.myform.value.lastname,
      address: this.myform.value.address,
      country: this.myform.value.country,
      email: this.myform.value.email,
      password:  this.myform.value.password
    }
    this.service.addRegister(regdata).subscribe((res) =>{
      this.serverMessage = res;

      if(this.serverMessage == "Email already exists"){
        alert("Email already exists. Choose another one and try again.");
        this.myform.controls['email'].reset();
      }
      else{
        if(this.serverMessage == "Success"){
        alert("Registration Successful. Proceed to login.");
        this.router.navigate(["/index"]);
        }
        else{
          alert("Registration Failed. Please try again.");
        }
      }
    });
  }


}
