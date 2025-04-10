import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-apply-for-investment',
  templateUrl: './apply-for-investment.component.html',
  styleUrls: ['./apply-for-investment.component.css']
})
export class ApplyForInvestmentComponent implements OnInit {

  id = 0;
  isVisible = false;
  investmentStatus = "";
  serverMessage: any;
  postServerMessage: any;
  myform!: FormGroup;
  constructor(private fb: FormBuilder, private service: ProjectService, private router: Router) { }

  ngOnInit(): void {

    this.myform = this.fb.group({
      gender: ['', [Validators.required]],
      age: ['', [Validators.required]],
      married: ['', [Validators.required]],
      businessname: ['', [Validators.required]],
      yearsOfEstablishment: ['', [Validators.required]],
      education: ['', [Validators.required]],
      selfEmploy: ['', [Validators.required]],
      applicantIncome: ['', [Validators.required]],
      coapplicantIncome: ['', [Validators.required]],
      investmentDuration: ['', [Validators.required]],
      creditHistory:['', [Validators.required]],
      investmentAmount: ['', [Validators.required]],
      agroplantLocation: ['', [Validators.required]]
    });

    this.getTotalAmountInvested();  // This method is initialized
  }

  onSubmit(){
    if(confirm("Are you sure you want to submit this Loan Application. It is not editable after submission.")){

      if(this.myform.value.investmentAmount > this.serverMessage){
        alert(`Required Loan Amount "${this.myform.value.investmentAmount}" cannot be greater than the Available Amount "${this.serverMessage}".`);
        this.myform.controls['investmentAmount'].reset();
      }

      var investmentData = {
        id: this.id,
        gender: this.myform.value.gender,
        age: this.myform.value.age,
        married: this.myform.value.married,
        businessname: this.myform.value.businessname,
        yearsOfEstablishment: this.myform.value.yearsOfEstablishment,
        education:  this.myform.value.education,
        selfEmploy:  this.myform.value.selfEmploy,
        applicantIncome: this.myform.value.applicantIncome,
        coapplicantIncome: this.myform.value.coapplicantIncome,
        investmentAmount: this.myform.value.investmentAmount,
        investmentDuration: this.myform.value.investmentDuration,
        creditHistory: this.myform.value.creditHistory,
        agroplantLocation: this.myform.value.agroplantLocation,
        investmentStatus: this.investmentStatus
      }

      this.service.addInvestmentApp(investmentData).subscribe((res) =>{
        this.postServerMessage = res;
        if(this.postServerMessage == "Business name already exists"){
          alert("Your business or firm has applied for loan before. You cannot apply twice.");
        }
        else{
          if(this.postServerMessage == "Success"){
          alert("Loan Application Successful. You are now redirected to the home page.");
          this.router.navigate(["/home"]);
          }
          else{
            alert("Loan Application Failed. Please try again.");
          }
        }
      });
      this.isVisible = true;
    }
  } //end of onSubmit()

  refresh(){
    this.myform.reset();
    this.isVisible = false;
  }

  // Get the total amount invested
  getTotalAmountInvested(){
    this.service.getTotalAmountInvested().subscribe((res) =>{
      this.serverMessage = res;
    });
  }

}
