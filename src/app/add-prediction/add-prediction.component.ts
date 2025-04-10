import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-prediction',
  templateUrl: './add-prediction.component.html',
  styleUrls: ['./add-prediction.component.css']
})
export class AddPredictionComponent implements OnInit {

  @Input() dbPredictionData:any;    //the @Input decorator is used to receive input through the <app-add-prediction>
  // in the "show-prediction.component.html" file
  serverMessage: any;
  updateServerMessage!: string;

  id:number = 0;
  gender = "";    // "gender" same as that of [(ngModel)]="gender" in the html file
  age = "";
  married = "";
  businessName = "";
  yearsOfEstablishment = "";
  education = "";
  selfEmploy = "";
  applicantIncome = "";
  coapplicantIncome = "";
  investmentAmount = "";
  investmentDuration = "";
  creditHistory = "";
  agroplantLocation = "";
  investmentStatus = "";

  investmentAppList$!:Observable<any[]>; // the exclamation symbol "!" is used to prevent error

  constructor(private service:ProjectService) { }

  ngOnInit(): void {
     this.id = this.dbPredictionData.id;
     this.gender = this.dbPredictionData.gender;
     this.age = this.dbPredictionData.age;
     this.married = this.dbPredictionData.married;
     this.businessName = this.dbPredictionData.businessName;
     this.yearsOfEstablishment = this.dbPredictionData.yearsOfEstablishment;
     this.education =  this.dbPredictionData.education;
     this.selfEmploy =  this.dbPredictionData.selfEmploy;
     this.applicantIncome = this.dbPredictionData.applicantIncome;
     this.coapplicantIncome = this.dbPredictionData.coapplicantIncome;
     this.investmentAmount = this.dbPredictionData.investmentAmount;
     this.investmentDuration = this.dbPredictionData.investmentDuration;
     this.creditHistory = this.dbPredictionData.creditHistory;
     this.agroplantLocation = this.dbPredictionData.agroplantLocation;
     this.investmentStatus = this.dbPredictionData.investmentStatus;

     this.investmentAppList$ = this.service.getInvestmentAppList();
  }

  // Add prediction by editng user application in the database
  addPrediction(){
    // For "this.gender", it must correspond to [(ngModel)] = "gender" for it to work.
    // "this.gender" value will be obtained from [(ngModel)] if the data from database is edited
    // and replaced with a new value. The same is applicable to others i.e. "this.married", etc.
    var predictData = {
      gender: this.gender,
      married: this.married,
      yearsOfEstablishment: this.yearsOfEstablishment,
      education:  this.education,
      selfEmploy:  this.selfEmploy,
      applicantIncome: this.applicantIncome,
      coapplicantIncome: this.coapplicantIncome,
      investmentAmount: this.investmentAmount,
      investmentDuration: this.investmentDuration,
      creditHistory: this.creditHistory,
      agroplantLocation: this.agroplantLocation
    }

    this.service.getPrediction(predictData).subscribe(res=> {
      //this closes the pop-up modal automatically after its content has been added
      var closeModalBtn = document.getElementById("add-edit-modal-close");
      if(closeModalBtn){
        closeModalBtn.click();  /* the click() method automatically clicks the button with the
                                  specified id "add-edit-modal-close" and closes it*/
      }

      this.serverMessage = res;
      // These uses a ternary operator to set up the alert message
      if(this.serverMessage == 1){
        this.investmentStatus = "Eligible";
        alert(`Prediction is \"Eligible\". ${this.businessName} is eligible for loan collection. `);
      }
      else{
        this.investmentStatus = "Not Eligible";
        alert(`Prediction is \"Not Eligible\". ${this.businessName} is not eligible for loan collection.`);
      }
      var updateData = {
        gender: this.gender,
        age: this.age,
        married: this.married,
        businessName: this.businessName,
        yearsOfEstablishment: this.yearsOfEstablishment,
        education:  this.education,
        selfEmploy:  this.selfEmploy,
        applicantIncome: this.applicantIncome,
        coapplicantIncome: this.coapplicantIncome,
        investmentAmount: this.investmentAmount,
        investmentDuration: this.investmentDuration,
        creditHistory: this.creditHistory,
        agroplantLocation: this.agroplantLocation,
        investmentStatus: this.investmentStatus
      };

      this.service.updateInvestmentStatus(updateData).subscribe(res=> {
        this.updateServerMessage = res;
        if(this.updateServerMessage == "Success"){
          alert("Update successful.");
        }

        else{
          alert("Update failed.");
        }

        this.investmentAppList$ = this.service.getInvestmentAppList();
      });

    });
  }

  // Test prediction with random values
  testPrediction(){
    // "this.gender" value will be obtained from [(ngModel)] placed in the input field
    var testPredictData = {
      gender: this.gender,
      married: this.married,
      yearsOfEstablishment: this.yearsOfEstablishment,
      education:  this.education,
      selfEmploy:  this.selfEmploy,
      applicantIncome: this.applicantIncome,
      coapplicantIncome: this.coapplicantIncome,
      investmentAmount: this.investmentAmount,
      investmentDuration: this.investmentDuration,
      creditHistory: this.creditHistory,
      agroplantLocation: this.agroplantLocation
    }

    this.service.getPrediction(testPredictData).subscribe(res=> {
      //this closes the pop-up modal automatically after its content has been added
      var closeModalBtn = document.getElementById("add-edit-modal-close");
      if(closeModalBtn){
        closeModalBtn.click();  /* the click() method automatically clicks the button with the
                                  specified id "add-edit-modal-close" and closes it*/
      }

      this.serverMessage = res;
      // These uses a ternary operator to set up the alert message
      if(this.serverMessage == 1){
        this.investmentStatus = "Eligible";
        alert(`Prediction is \"Eligible\". ${this.businessName} is eligible for loan collection. `);
      }
      else{
        this.investmentStatus = "Not Eligible";
        alert(`Prediction is \"Not Eligible\". ${this.businessName} is not eligible for loan collection.`);
      }

      this.investmentAppList$ = this.service.getInvestmentAppList();

    });
  }

}
